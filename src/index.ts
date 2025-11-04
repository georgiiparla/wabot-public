import express from 'express';
import useragent from 'express-useragent';
import { config } from './config';
import appRouter from './routes';
import { prisma } from './lib/prisma';

async function main() {
    const app = express();

    // Middleware
    app.use(express.json({ limit: '10mb' }));
    app.use(useragent.express());

    // Routes
    app.use('/', appRouter);

    // Start server
    app.listen(config.port, () => {
        console.log(`🚀 App running on port ${config.port}`);
    });
}

main()
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });