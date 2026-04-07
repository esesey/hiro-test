import {
  type PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react";
import { cva } from "class-variance-authority";
import { createPortal } from "react-dom";
import { cn } from "../utils/classnames";

export interface BaseModalProps extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
}

interface ModalProps extends BaseModalProps {
  appearance?: "left" | "right" | "top" | "bottom" | "center";
  className?: string;
  overlayClassName?: string;
  backdropClassName?: string;
}

export const Modal = ({
  children,
  isOpen,
  onClose,
  appearance = "center",
  className,
  overlayClassName,
  backdropClassName,
}: ModalProps) => {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setTimeout(() => setIsAnimating(true), 10);
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => setShouldRender(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (isAnimating) {
      onClose();
    }
  }, [onClose, isAnimating]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    },
    [handleClose],
  );

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handleKeyDown]);

  if (!shouldRender) return null;

  const animationBaseClassName = "transition-all ease-in-out duration-300";

  const modalAppearanceClassName = cva("bg-fill rounded-lg fixed transform", {
    variants: {
      appearance: {
        left: cn(
          "left-0 top-0 h-full w-80 max-w-full",
          isAnimating ? "translate-x-0" : "-translate-x-full",
        ),
        right: cn(
          "right-0 top-0 h-full w-80 max-w-full",
          isAnimating ? "translate-x-0" : "translate-x-full",
        ),
        top: cn(
          "top-0 left-0 w-full h-64 max-h-full",
          isAnimating ? "translate-y-0" : "-translate-y-full",
        ),
        bottom: cn(
          "bottom-0 left-0 w-full h-64 max-h-full",
          isAnimating ? "translate-y-0" : "translate-y-full",
        ),
        center: cn(
          "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg",
          isAnimating ? "scale-100 opacity-100" : "scale-95 opacity-0",
        ),
      },
    },
    defaultVariants: {
      appearance: "center",
    },
  });

  const modalContent = (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center",
        animationBaseClassName,
        overlayClassName,
      )}
    >
      <div
        className={cn(
          "absolute inset-0 bg-black",
          animationBaseClassName,
          isAnimating ? "opacity-50" : "opacity-0",
          backdropClassName,
        )}
        onClick={handleBackdropClick}
      />
      <div
        className={cn(
          modalAppearanceClassName({ appearance }),
          animationBaseClassName,
          className,
        )}
        role="dialog"
        aria-modal="true"
      >
        <div className="h-full overflow-auto p-6">{children}</div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};
