-- CreateTable
CREATE TABLE "Vote" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Vote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VotesOnPosts" (
    "postId" INTEGER NOT NULL,
    "voteId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VotesOnPosts_pkey" PRIMARY KEY ("postId","voteId")
);

-- AddForeignKey
ALTER TABLE "VotesOnPosts" ADD CONSTRAINT "VotesOnPosts_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VotesOnPosts" ADD CONSTRAINT "VotesOnPosts_voteId_fkey" FOREIGN KEY ("voteId") REFERENCES "Vote"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
