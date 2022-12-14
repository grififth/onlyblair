import Router from "next/router";

import timeDiff from "../utils/globalFunctions";

export default function Post({ post, read }) {
  return (
    <div
      className="flex flex-col lg:flex-row justify-between items-center hover:border-accent hover:cursor-pointer rounded-lg lg:p-4 border-2 border-transparent"
      onClick={() => {
        Router.push(`/posts/${post.id}`);
      }}
    >
      <div className="w-full flex items-center">
        <div
          className={`rounded-full w-3 h-3 mr-4 ${
            read >= post.commentsCount ? "bg-transparent" : "bg-accent2"
          }`}
        ></div>
        <h1 className="w-full lg:w-5/6 text-2xl font-bold text-ellipsis whitespace-nowrap overflow-hidden block">
          {post.title}
        </h1>
      </div>
      <div className="w-full lg:w-1/6 h-full flex gap-2 lg:grid lg:grid-cols-2 items-center lg:justify-items-center">
        <p className="col-span-1 text-sm">{post.commentsCount}</p>
        <p className="col-span-1 text-sm">
          {timeDiff(new Date(Date.parse(post.updatedAt)))}
        </p>
      </div>
    </div>
  );
}
