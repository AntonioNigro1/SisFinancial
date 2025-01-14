"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/modules/shared/presentation/view/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useMode } from "../hooks/useMode";

const Mode = () => {
  const { mode, updateMode } = useMode();
  return (
    <div className="absolute right-4 bottom-4">
      <Button variant="outline" className={cn("rounded-full w-8 h-8 p-0", mode === "dark" ? "hidden" : "")} onClick={() => updateMode("dark")}>
        <Sun className="w-6 h-6" />
      </Button>
      <Button variant="outline" className={cn("rounded-full w-8 h-8 p-0", mode === "light" ? "hidden" : "")} onClick={() => updateMode("light")}>
        <Moon className={"w-6 h-6 fill-white"} />
      </Button>
    </div>
  );
};

export default Mode;
