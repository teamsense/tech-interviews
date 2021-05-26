from datetime import datetime, timedelta, timezone
from random import randint
from uuid import uuid4
from urllib.parse import quote

date = datetime(2021, 5, 5, 0, 0, 0, 0, tzinfo=timezone.utc)
i = 0
while i < 40:
    # 2021-05-05T15:07:57.957375+00:00 at=info method=GET path="/api/responses/report?start_date=2021-05-05T00%3A00%3A00.000-07%3A00&end_date=2021-05-05T23%3A59%3A59.999-07%3A00" host=app.example.com request_id=58bb7e4c-7375-4d91-9f87-3b45e459caf0 fwd="10.0.90.77" dyno=web.1 connect=1ms service=772ms status=200 bytes=39347 protocol=https
    date += timedelta(microseconds=randint(10000000, 28800000000))
    tz = timedelta(minutes=60 * randint(-10, -4))
    start_date = datetime(2020, 5, 18, 0, 0, 0, 0, tzinfo=timezone(tz))
    start_date += timedelta(days=randint(0, 360))
    end_date = start_date + timedelta(days=randint(1, 30))
    duration = end_date - start_date
    reqid = uuid4()
    ip3 = randint(0, 255)
    ip4 = randint(0, 255)
    dyno = randint(1, 5)
    connect = randint(1, 15)
    service = 1200 * duration.days + randint(1, 1000)
    byte_count = 11000 * duration.days + randint(0, 20000)
    template = f'{date.isoformat()} at=info method=GET path="/api/responses/report?start_date={quote(start_date.isoformat())}&end_date={quote(end_date.isoformat())}" host=app.example.com request_id={reqid} fwd="10.0.{ip3}.{ip4}" dyno=web.{dyno} connect={connect}ms service={service}ms status=200 bytes={byte_count} protocol=https'
    print(template)
    i += 1