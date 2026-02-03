"use client"
import { useState } from 'react';
import { Log } from "@/src/types/index";
import LogItem from "@/src/components/LogItem";
import InputForm from "@/src/components/InputForm";

export default function Page() {
  const [logs, setLogs] = useState<Log[]>([]);

  //投稿機能
  const addLog = (text: string) => {
    if(text === "") return;
    const newLog: Log = {
      id: Date.now(),
      content: text,
      date: new Date().toLocaleString(),
    };
    setLogs([newLog, ...logs]);
  };

  const clearLogs = () => {
    setLogs([]);
  }

  const deleteLog = (id:number) => {
    setLogs(logs.filter((log) => log.id !== id));
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans">
      <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">学習日誌アプリ</h1>

        <InputForm onAdd={addLog}></InputForm>

        {/* リスト表示エリア */}
        <div className="space-y-4 mb-8 mt-6">
          {logs.length === 0 && (
            <p className="text-center text-gray-400">まだ投稿はありません。</p>
          )}

          {logs.map((log) => (
            <LogItem
              key={log.id}
              log={log}
              onDelete={deleteLog}
            />
          ))}
        </div>

        {/* リセットボタン */}
        {logs.length >0 && (
          <button
            onClick={clearLogs}
            className="w-full bg-red-100 text-red-500 py-2 rounded-lg hover:bg-red-200 transition text-sm font-bold"
          >
            履歴をすべて削除
          </button>
        )}
      </div>
    </div>
  )
}
