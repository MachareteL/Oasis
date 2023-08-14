import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export default function MessageList({
  hasMore,
  messages,
  next,
}: MessageListProps) {
  return (
    <ul>
      <InfiniteScroll
        dataLength={messages.length}
        hasMore={hasMore}
        next={next}
        loader={<h4>Loading...</h4>}
      >
        <div></div>
      </InfiniteScroll>
    </ul>
  );
}
