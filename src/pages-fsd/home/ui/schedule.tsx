import { sized } from '@shared/ui/lib/sized';

const schedule = [
    {
        date: '23.07.23',
        serves: [
            {
                time: '12:00',
                title: 'Молебен св. равноапостольной Нине',
            },
            {
                time: '12:30',
                title: '☕ / 🍵',
            },
        ],
    },
    {
        date: '30.07.23',
        serves: [
            {
                time: '12:00',
                title: 'Молебен св. равноапостольной Нине',
            },
            {
                time: '12:30',
                title: '☕ / 🍵',
            },
        ],
    },
    {
        date: '06.08.23',
        serves: [
            {
                time: '12:00',
                title: 'Молебен св. равноапостольной Нине',
            },
            {
                time: '12:30',
                title: '☕ / 🍵',
            },
        ],
    },
];

export const Schedule = () => {
    return (
        <div className="section">
            <h2 className="subtitle">Расписание</h2>
            <div
                style={{
                    borderRadius: 8,
                    border: '0.5px solid gray',
                }}
            >
                {schedule.map((day, idx, arr) => (
                    <div
                        key={day.date}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'column',
                            padding: `${sized(4)} 0`,
                        }}
                    >
                        <span
                            style={{
                                fontSize: sized(7),
                                marginBottom: sized(2),
                                color: '#66909C',
                            }}
                        >
                            {day.date}
                        </span>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            {day.serves.map((serve) => (
                                <span key={serve.time} style={{ fontSize: sized(5) }}>
                                    {serve.time} - {serve.title}
                                </span>
                            ))}
                        </div>
                        {idx !== arr.length - 1 && (
                            <span
                                style={{
                                    background: 'gray',
                                    width: '100%',
                                    height: 0.5,
                                    marginTop: sized(4),
                                }}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};
