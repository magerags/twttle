"use client";

import { motion } from "motion/react";
import { useState, useLayoutEffect, useRef } from "react";
import RecentPosts from "@/components/RecentPosts";

export interface Post {
  slug: string;
  title: string;
  abstract: string;
  publishedOn: string;
}

export default function HomeClient({ posts }: { posts: Post[] }) {
  const [animationStarted, setAnimationStarted] = useState(false);
  const [positions, setPositions] = useState<{
    initial: DOMRect[];
    target: DOMRect[];
  }>({ initial: [], target: [] });

  const initialContainerRef = useRef<HTMLDivElement>(null);
  const targetContainerRef = useRef<HTMLDivElement>(null);
  const initialLetterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const targetLetterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const fullName = "TOM WHITTLE";
  const targetWord = "TWTTLE";

  const letterMapping = new Map([
    [0, 0], // T -> T
    [4, 1], // W -> W
    [7, 2], // T -> T
    [8, 3], // T -> T
    [9, 4], // L -> L
    [10, 5], // E -> E
  ]);

  useLayoutEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStarted(true);
    }, 1000);

    const measurePositions = () => {
      if (!initialContainerRef.current || !targetContainerRef.current) return;

      const initialRects = initialLetterRefs.current.map((el) =>
        el!.getBoundingClientRect()
      );
      const targetRects = targetLetterRefs.current.map((el) =>
        el!.getBoundingClientRect()
      );

      setPositions({ initial: initialRects, target: targetRects });
    };

    measurePositions();

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-start pt-48 min-h-screen">
      <main className="flex flex-col items-center">
        <div
          className="text-6xl mb-4 text-stone-800 font-lexend"
          style={{ height: "80px" }}
        >
          <div className="relative">
            <div
              ref={targetContainerRef}
              aria-hidden="true"
              className="flex justify-center"
              style={{ visibility: "hidden" }}
            >
              {targetWord.split("").map((letter, index) => (
                <span
                  key={index}
                  ref={(el) => {
                    targetLetterRefs.current[index] = el;
                  }}
                  className="inline-block"
                >
                  {letter}
                </span>
              ))}
            </div>

            <div
              ref={initialContainerRef}
              className="absolute inset-0 flex justify-center"
            >
              {fullName.split("").map((letter, index) => {
                const targetIndex = letterMapping.get(index);
                const isKept = targetIndex !== undefined;

                let animateProps = {};
                if (
                  positions.initial.length > 0 &&
                  positions.target.length > 0
                ) {
                  if (isKept) {
                    const initialRect = positions.initial[index];
                    const targetRect = positions.target[targetIndex!];
                    const deltaX = targetRect.left - initialRect.left;
                    const deltaY = targetRect.top - initialRect.top;

                    animateProps = {
                      x: animationStarted ? deltaX : 0,
                      y: animationStarted ? deltaY : 0,
                    };
                  } else {
                    animateProps = {
                      opacity: animationStarted ? 0 : 1,
                      filter: animationStarted ? "blur(8px)" : "blur(0px)",
                      scale: animationStarted ? 0.8 : 1,
                    };
                  }
                }

                return (
                  <motion.span
                    key={index}
                    ref={(el) => {
                      initialLetterRefs.current[index] = el;
                    }}
                    className="inline-block"
                    animate={animateProps}
                    transition={
                      isKept
                        ? {
                            delay: 0.5,
                            type: "spring",
                            damping: 15,
                            stiffness: 100,
                            mass: 0.8,
                          }
                        : {
                            duration: 1,
                            ease: "easeOut",
                          }
                    }
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                );
              })}
            </div>
          </div>
        </div>

        <motion.nav
          className="flex gap-8 text-xl font-light text-stone-600"
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: animationStarted ? 1 : 0,
            y: animationStarted ? 0 : 10,
          }}
          transition={{
            delay: 0.7,
            duration: 0.7,
            ease: "easeOut",
          }}
        >
          <motion.a
            href="/writings"
            className="hover:text-stone-900 font-lexend transition-colors"
          >
            Writings
          </motion.a>
          <motion.a
            href="/profile"
            className="hover:text-stone-900 font-lexend transition-colors"
          >
            Profile
          </motion.a>
          <motion.a
            href="/work"
            className="hover:text-stone-900 font-lexend transition-colors"
          >
            Work
          </motion.a>
          <motion.a
            href="/apps"
            className="hover:text-stone-900 font-lexend transition-colors"
          >
            Apps
          </motion.a>
        </motion.nav>
        <RecentPosts posts={posts} animationStarted={animationStarted} />
      </main>
    </div>
  );
}
