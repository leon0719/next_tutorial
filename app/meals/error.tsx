"use client"; // Error 組件實際上是一個錯誤邊界組件 它需要捕獲並處理客戶端渲染時發生的錯誤 只有客戶端組件才能作為錯誤邊界

function error() {
  return (
    <main className="error">
      <h1>An error occurred</h1>
      <p>Failed to fetch meal data. Please try again later.</p>
    </main>
  );
}

export default error;
