import VipIsland from "../islands/vip.tsx";
import { Dock } from "../components/Dock.tsx";

export default function ActivatePage(props: { url: URL }) {
  const code = props.url.searchParams.get("code") || "";
  
  return (
    <div class="w-full p-2 leading-8 min-h-screen text-shadow bg-pink-300 text-lg text-red-100">
      <h1 class="my-8 text-sm text-center font-bold text-[#c5005a]">
        LazyCat 情趣小游戏
      </h1>
      <img src="/logo.png" class="w-16 h-16 mx-auto rounded-lg" />
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <VipIsland code={code}></VipIsland>
        <div class="leading-8 text-gray-900 max-w-lg mt-8 max-auto">
          ✅ 激活验证中...
        </div>
        <p class="m-2 font-bold text-[#c5005a]">
          请稍候，正在验证激活码...
        </p>
        <p class="fixed bottom-20 left-0 right-0 text-center m-2 font-bold text-[#c5005a]">
          🔔 有问题请添加客服微信【 YunYun038a 】
        </p>
      </div>
      <Dock />
    </div>
  );
}
