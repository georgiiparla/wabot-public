-- CreateEnum
CREATE TYPE "MessageType" AS ENUM ('BUTTONS', 'URL', 'DOCUMENT_LINK', 'TEXT', 'IMAGE_LINK');

-- CreateTable
CREATE TABLE "WebhookLog" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "payload" JSONB NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "WebhookLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CallEvent" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "accountId" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "uuid" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "payload" JSONB,
    "filePath" TEXT,
    "processedAt" TIMESTAMP(3),

    CONSTRAINT "CallEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InteractiveMessage" (
    "id" TEXT NOT NULL,
    "type" "MessageType" NOT NULL,
    "bodyText" TEXT NOT NULL,
    "headerText" TEXT,
    "url" TEXT,
    "urlDisplayText" TEXT,
    "documentUrl" TEXT,
    "documentCaption" TEXT,
    "documentFilename" TEXT,
    "imageUrl" TEXT,

    CONSTRAINT "InteractiveMessage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Button" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "messageId" TEXT NOT NULL,
    "triggersMessageId" TEXT NOT NULL,

    CONSTRAINT "Button_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Button" ADD CONSTRAINT "Button_messageId_fkey" FOREIGN KEY ("messageId") REFERENCES "InteractiveMessage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Button" ADD CONSTRAINT "Button_triggersMessageId_fkey" FOREIGN KEY ("triggersMessageId") REFERENCES "InteractiveMessage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
