const AVERAGE_SPEED_MPH = 60;

const cityDistances: Record<string, Record<string, number>> = {
    "Norfolk": {
        "Richmond": 90,
        "Washington DC": 200,
    },
    "Richmond": {
        "Norfolk": 90,
        "Washington DC": 100,
    },
    "Washington DC": {
        "Norfolk": 200,
        "Richmond": 100,
    }
};

export function estimateDeliveryHours(origin: string, destination: string): number {
    const distance = cityDistances[origin]?.[destination] || 1000;
    return Math.ceil(distance / AVERAGE_SPEED_MPH);
}