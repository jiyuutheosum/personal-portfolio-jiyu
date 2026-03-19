import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

import Image1 from "@/assets/images/image1.jpeg";
import Image2 from "@/assets/images/image2.jpeg";
import Image3 from "@/assets/images/image3.jpeg";
import Image4 from "@/assets/images/image4.jpeg";
import Image5 from "@/assets/images/image5.jpeg";

interface CardRotateProps {
  children: React.ReactNode;
  onSendToBack: () => void;
  sensitivity: number;
}

function CardRotate({ children, onSendToBack, sensitivity }: CardRotateProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  function handleDragEnd(
    _: never,
    info: { offset: { x: number; y: number } }
  ) {
    if (
      Math.abs(info.offset.x) > sensitivity ||
      Math.abs(info.offset.y) > sensitivity
    ) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  return (
    <motion.div
      className="absolute cursor-grab active:cursor-grabbing"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.45}
      whileTap={{ cursor: "grabbing", scale: 0.98 }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

interface StackProps {
  randomRotation?: boolean;
  sensitivity?: number;
  cardDimensions?: { width: number; height: number };
  sendToBackOnClick?: boolean;
  cardsData?: { id: number; img: string }[];
  animationConfig?: { stiffness: number; damping: number };
}

export default function Stack({
  randomRotation = false,
  sensitivity = 180,
  cardDimensions = { width: 208, height: 208 },
  cardsData = [],
  animationConfig = { stiffness: 220, damping: 22 },
  sendToBackOnClick = false,
}: StackProps) {
  const [cards, setCards] = useState(
    cardsData.length
      ? cardsData
      : [
          { id: 1, img: Image4 },
          { id: 2, img: Image5 },
          { id: 3, img: Image3 },
          { id: 4, img: Image1 },
          { id: 5, img: Image2 },
        ]
  );

  const [poppedId, setPoppedId] = useState<number | null>(null);

  const sendToBack = (id: number) => {
    setCards((prev) => {
      const newCards = [...prev];
      const index = newCards.findIndex((card) => card.id === id);
      const [card] = newCards.splice(index, 1);
      newCards.unshift(card);
      return newCards;
    });

    setTimeout(() => {
      setPoppedId((current) => current);
      setTimeout(() => {
        setCards((currentCards) => {
          setPoppedId(currentCards[1]?.id ?? null);
          setTimeout(() => setPoppedId(null), 220);
          return currentCards;
        });
      }, 0);
    }, 40);
  };

  return (
    <div
      className="relative"
      style={{
        width: cardDimensions.width,
        height: cardDimensions.height,
        perspective: 700,
      }}
    >
      {cards.map((card, index) => {
        const randomRotate = randomRotation ? Math.random() * 8 - 4 : 0;
        const baseScale = 1 + index * 0.05 - cards.length * 0.05;
        const isPopped = poppedId === card.id;

        return (
          <CardRotate
            key={card.id}
            onSendToBack={() => sendToBack(card.id)}
            sensitivity={sensitivity}
          >
            <motion.div
              className="overflow-hidden rounded-[24px] border border-[rgba(168,195,160,0.35)] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
              onClick={() => sendToBackOnClick && sendToBack(card.id)}
              animate={{
                rotateZ: (cards.length - index - 1) * 3 + randomRotate,
                scale: isPopped ? baseScale + 0.06 : baseScale,
                transformOrigin: "85% 85%",
              }}
              initial={false}
              transition={{
                type: "spring",
                stiffness: isPopped ? 240 : animationConfig.stiffness,
                damping: isPopped ? 26 : animationConfig.damping,
              }}
              style={{
                width: cardDimensions.width,
                height: cardDimensions.height,
              }}
            >
              <img
                src={card.img}
                alt={`card-${card.id}`}
                className="pointer-events-none h-full w-full object-cover"
              />
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
}