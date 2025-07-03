export const dynamic = "force-dynamic";

import { getDoctors } from "@/lib/api";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await getDoctors({ isHighlighted: false });

    if (!response.success) {
      throw new Error("Failed to fetch doctors data");
    }

    const data = response.data;

    return NextResponse.json(
      {
        status: "success",
        data: data,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        message:
          error instanceof Error ? error.message : "Internal server error",
      },
      { status: 500 }
    );
  }
}
