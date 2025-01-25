"use client";
import Link from "next/link";
import React from "react";
import { SparklesIcon } from "lucide-react";
import { useUserRole } from "@/hooks/useUserRole";
import { Button } from "./ui/button";

function Dasboard() {

  // useUserRole hook to check if user is a candidate
  const { isCandidate, isLoading } = useUserRole();

// if user is a candidate or loading, return null
  if (isCandidate || isLoading) return null;

  return (
    <Link href={"/dashboard"}>
      <Button className="gap-2 font-medium" size={"sm"}>
        <SparklesIcon className="size-4" />
        Dashboard
      </Button>
    </Link>
  );
}

export default Dasboard;
