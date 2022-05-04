-- CreateTable
CREATE TABLE "Org" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "settings" JSONB,

    CONSTRAINT "Org_pkey" PRIMARY KEY ("id")
);
