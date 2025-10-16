import { useSignal } from "@preact/signals";
import { ComponentChildren } from "preact";
import { useEffect } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";

// 定义有效的激活码列表
const validCodes = new Set([
  "888888", 
  "666666", 
  "123456",
  "vip2024",
  "love999"
  // 在这里添加你的激活码
]);

interface Props {
  code?: string;
  children?: ComponentChildren;
}

export default function VipIsland({ code, children }: Props) {
   useEffect(()=>{
    if(IS_BROWSER){
      if (code && validCodes.has(code)) {
        // 激活码正确，设置VIP状态
        localStorage.setItem('lockVip', JSON.stringify({"type":"boolean","data":true}));
        localStorage.setItem('vip', 'true');
        setTimeout(() => {
          location.href = '/';
        }, 1500);
      } else if (code) {
        // 激活码错误
        alert('激活码无效！请检查后重试。');
        setTimeout(() => {
          location.href = '/member';
        }, 1500);
      }
    }
    return ()=>{}
   },[code])

  return (
    <div>
      {code ? (
        validCodes.has(code) ? (
          <div class="text-green-600 font-bold">✅ 激活成功！正在跳转...</div>
        ) : (
          <div class="text-red-600 font-bold">❌ 激活码无效！</div>
        )
      ) : (
        <div>等待验证...</div>
      )}
      {children}
    </div>
  );
}
