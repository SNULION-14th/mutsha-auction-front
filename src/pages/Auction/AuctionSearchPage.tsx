import { useMemo, useState } from "react";

import { AuctionCard } from "./components/AuctionCard";

import type { AuctionListItem } from "@/apis/api";
import { Button } from "@/components/Button";
import Pagination from "@/components/Pagination";
import { useAuctions } from "@/hooks/useAuctionQuery";
import { toAbsoluteUrl } from "@/utils/url";

const PAGE_SIZE = 6;

function pickImage(a: AuctionListItem) {
  const raw = a.image_file || a.image_file_url || a.image_url || "";
  return toAbsoluteUrl(raw);
}

function AuctionSearchPage() {
  const {
    data: auctions = [],
    isPending,
    isError,
    refetch,
  } = useAuctions({ status: "active" });
  const [page, setPage] = useState(1);

  const total = auctions.length;
  const currentPage = Math.min(page, Math.max(1, Math.ceil(total / PAGE_SIZE)));
  const pageItems = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return auctions.slice(start, start + PAGE_SIZE);
  }, [auctions, currentPage]);

  return (
    <div className="w-full px-50 py-30">
      <div className="max-w-[1062px] flex flex-col mx-auto gap-25">
        <div className="flex flex-col gap-5">
          <div className="text-5xl font-bold text-scale-600">경매 입찰하기</div>
          <div className="text-2xl text-scale-400">
            멋사 구성원들의 애착템에 입찰해보세요!
          </div>
        </div>
        {isPending ? (
          <div className="text-center text-scale-400 py-20">
            불러오는 중 ...
          </div>
        ) : isError ? (
          <div role="alert" className="text-center text-point-warning py-20">
            <p>경매 목록 불러오기 실패</p>
            <Button
              type="button"
              onClick={() => void refetch()}
              className="mt-4"
            >
              다시 시도
            </Button>
          </div>
        ) : total === 0 ? (
          <div className="text-center text-scale-400 py-20">
            아직 진행 중인 경매가 없어요.
          </div>
        ) : (
          <>
            <div className="grid grid-cols-3 gap-6 min-h-[900px]">
              {pageItems.map((a) => (
                <AuctionCard
                  key={a.id}
                  id={a.id}
                  img={pickImage(a)}
                  title={a.title}
                  description={a.description}
                  current_price={a.current_price}
                />
              ))}
            </div>
            <Pagination
              totalItems={total}
              pageSize={PAGE_SIZE}
              currentPage={currentPage}
              onPageChange={setPage}
              className="mt-8"
            />
          </>
        )}
      </div>
    </div>
  );
}

export default AuctionSearchPage;
