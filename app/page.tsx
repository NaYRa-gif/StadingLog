"use client"
import { log } from 'console';
import { useState } from 'react';

interface Log {
  id: number;
  content: string;
  date: string;
};

export default function Page() {
  const [inputText, setInputText] = useState<string>("");
  const [logs, setLogs] = useState<Log[]>([]);

  //投稿機能
  const addLog = () => {
    if(inputText === "") return;
    const newLog: Log = {
      id: Date.now(),
      content: inputText,
      date: new Date().toLocaleString(),
    };
    setLogs([newLog, ...logs]);
    setInputText("");
  };

  //削除機能
  const clearLogs = () => {
    setLogs([]);
  }

  //一部削除機能
  const deleteLog = (id:number) => {
    setLogs(logs.filter((log) => log.id !== id));
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans">
      <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">学習日誌アプリ</h1>

        {/* 入力エリア */}
        <div className="flex gap-2 mb-8">
          <input
            type="text"
            className="flex-1 border-2 border-gray-200 p-2 rounded-lg text-black focus:outline-none focus:border-blue-500"
            placeholder="今日は何を学んだ？"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button
            onClick={addLog}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-600 transition"
          >
            投稿
          </button>
        </div>

        {/* リスト表示エリア */}
        <div className="space-y-4 mb-8">
          {logs.length === 0 && (
            <p className="text-center text-gray-400">まだ投稿はありません。</p>
          )}

          {logs.map((log) => (
            <div key={log.id} className="flex border-b border-gray-100 pb-4">
              <div>
                <p className="text-gray-800 text-lg">{log.content}</p>
                <p className="text-xs text-gray-400 mt-1">{log.date}</p>
              </div>
              <button
                onClick={() => deleteLog(log.id)}
                className="text-white text-sm bg-red-500 px-2 py-1 rounded-lg mt-2 ml-auto hover:bg-red-600 transition"
              >
                削除
              </button>
            </div>
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
