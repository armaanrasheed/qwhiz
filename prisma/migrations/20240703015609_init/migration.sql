-- CreateTable
CREATE TABLE "School" (
    "id" SERIAL NOT NULL,
    "logourl" VARCHAR(255) NOT NULL,
    "schoolname" VARCHAR(255) NOT NULL,
    "location" VARCHAR(255) NOT NULL,

    CONSTRAINT "School_pkey" PRIMARY KEY ("id")
);
