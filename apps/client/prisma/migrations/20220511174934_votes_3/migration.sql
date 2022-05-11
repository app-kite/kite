-- DropForeignKey
ALTER TABLE "VotesOnPosts" DROP CONSTRAINT "VotesOnPosts_voteId_fkey";

-- AddForeignKey
ALTER TABLE "VotesOnPosts" ADD CONSTRAINT "VotesOnPosts_voteId_fkey" FOREIGN KEY ("voteId") REFERENCES "Vote"("id") ON DELETE CASCADE ON UPDATE CASCADE;
