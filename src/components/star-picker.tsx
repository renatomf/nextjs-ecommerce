"use client";

import { cn } from "@/lib/utils";
import { StarIcon } from "lucide-react";
import { useState } from "react";

interface Props {
  value?: number;
  onChange?: (value: number) => void;
  disabled?: boolean;
  className?: string;
};

export const StarPicker = ({
  value = 0,
  onChange,
  disabled,
  className,
}: Props) => {
  const [hoverValue, setHoverValue] = useState(0);

  const handleChange = (value: number) => {
    console.log({ value });

    onChange?.(value);
  }

  return ( 
    <div
      className={cn(
        "flex items-center",
        disabled && "opacity-50 cursor-not-allowed",
        className,
      )}
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={disabled}
          className={cn(
            "p-0.5 hover:scale-110 transition",
            !disabled && "cursor-pointer"
          )}
          onClick={() => handleChange(star)}
          onMouseEnter={() => setHoverValue(star)}
          onMouseLeave={() => setHoverValue(0)}
        >
          <StarIcon 
            className={cn(
              "size-5",
              (hoverValue || value) >= star
                ? "fill-black stroke-black"
                : "stroke-black"
            )}
          />
        </button>
      ))}
    </div>
   );
}
