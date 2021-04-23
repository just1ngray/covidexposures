/**
 * Delayed Worker
 * @param offset number of minutes before starting each task
 * @param delay number of minutes between tasks
 */
export default async function(offset: number, delay: number, task: () => Promise<any>) {
    await new Promise<void>((resolve) => {
        setTimeout(() => resolve(), 1000*60*offset);
    });

    while (true) {
        await task();

        await new Promise<void>((resolve) => {
            setTimeout(() => resolve(), 1000*60*delay);
        });
    }
}