import React, { useEffect, useState } from "react"
import loadingSvg from "../../assets/loading.svg"
import { getSchedule } from "./api/getSchedule"

const Schedule = () => {
  const [schedule, setSchedule] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchSchedule = async () => {
      setIsLoading(true)
      try {
        const res = await getSchedule()
        setSchedule(res)
      } catch (e) {
        console.log(e)
      } finally {
        setIsLoading(false)
      }
    }
    fetchSchedule()
  }, [])

  if (isLoading)
    return (
      <div className="py-2 flex flex-col w-full items-center gap-2 container mx-auto">
        <h2 className="text-xl sm:text-2xl">Расписание</h2>
        <img src={loadingSvg} alt="loading image" className="animate-spin" />
      </div>
    )

  return (
    <div className="py-2 flex flex-col w-full items-center gap-2 container mx-auto">
      <h2 className="text-xl sm:text-2xl">Расписание</h2>
      {schedule.length ? (
        <div className="lg:grid-cols-2 grid w-full gap-2 justify-center">
          {schedule.map((day) => (
            <div
              className="p-2 border-2 rounded-xl overflow-auto max-w-max min-w-full"
              key={day.date}
            >
              <h3 className="text-xl border-b pb-1 mb-1 w-full">{day.date}</h3>
              <table className="text-left w-full">
                <thead className="w-full">
                  <tr className="border-b-2 w-full">
                    <th className="p-1 sm:p-2 !font-bold">Пара</th>
                    <th className="p-1 sm:p-2 !font-bold">Дисциплина</th>
                    <th className="p-1 sm:p-2 !font-bold">Преподаватель</th>
                    <th className="p-1 sm:p-2 !font-bold">Группа</th>
                  </tr>
                </thead>
                <tbody>
                  {day.lessons && day.lessons.map((lesson, index) => (
                    <tr
                      className={`border-b last:border-b-0 ${
                        lesson.isUpdated && "bg-red-200"
                      }`}
                      key={index}
                    >
                      <td className="p-1 sm:p-2 !font-bold">{lesson.number}</td>
                      <td className="p-1 sm:p-2">{lesson.discipline}</td>
                      <td className="p-1 sm:p-2">{lesson.teacher}</td>
                      <td className="p-1 sm:p-2">{lesson.group}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {(!day.lessons || !day.lessons.length) ? <p className="p-2">Нет пар</p> : null}
            </div>
          ))}
        </div>
      ) : (
        <p>Расписание не найдено</p>
      )}
    </div>
  )
}

export default Schedule
