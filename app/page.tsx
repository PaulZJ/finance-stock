/*
 * @Author: PaulZJ zhangjun8896@126.com
 * @Date: 2024-03-14 18:41:03
 * @LastEditors: PaulZJ zhangjun8896@126.com
 * @LastEditTime: 2024-03-15 00:32:09
 * @FilePath: /finance-stock/app/page.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Image from "next/image";

export default function Page() {
  return (
    <div className="flew-col">
      <div className="w-full h-screen pt-6 pl-10 bg-gradient-to-br from-blue-100 to-blue-300 bg-opacity-30 content-center">
        <h1 className=" text-gray-700 text-4xl m-auto mb-20">股票网站</h1>
        <p className=" text-xl mb-4 text-red-600 text-opacity-70">股票信息随时更新</p>
        <p className=" text-slate-700">欢迎使用本网站, 随时订阅股票信息</p>
      </div>
    </div>
  );
}
