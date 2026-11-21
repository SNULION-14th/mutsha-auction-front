import "./story.css";
import type { RefObject } from "react";

// 이 단계에서는 모든 콘텐츠를 기본 레이아웃으로 읽을 수 있습니다.
export function useStoryMotion(home: RefObject<HTMLDivElement | null>) {
  void home;
}
