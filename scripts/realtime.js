(()=>{
    dayjs.extend(window.dayjs_plugin_duration)
    const el = document.getElementById('realtime_duration')
    const date = dayjs('2025-06-30')
    setInterval(()=>{
        const dur = dayjs.duration(dayjs().diff(date))
        const days = String(Math.floor(dur.asDays()))
        el.innerHTML = '本站已运行' + days + dur.format('天HH时mm分ss秒')
    },1000)
})()