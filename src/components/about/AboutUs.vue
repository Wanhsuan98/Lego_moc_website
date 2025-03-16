<template>
  <div class="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto">
      <h1 class="text-3xl font-bold text-gray text-center mb-10 font-body">
        About Us
      </h1>
      <div class="space-y-6">
        <div
          class="bg-white rounded-lg shadow-md"
          :class="{ blueHover: !expanded[0] }"
        >
          <div
            class="flex justify-between items-center p-4 cursor-pointer"
            @click="toggleQA(0)"
          >
            <h2 class="text-lg font-semibold text-gray-700">
              Q: What is LEGO MOC?
            </h2>
            <span
              class="text-2xl text-blue-500 transition-transform duration-300"
              :class="{ 'rotate-45': expanded[0] }"
            >
              +
            </span>
          </div>
          <div
            v-if="expanded[0]"
            class="p-4 border-t border-gray-200 animate-slide-in"
            :class="{ hidden: !expanded[0] }"
          >
            <p class="text-gray-600">
              LEGO MOC 是「My Own Creation」（我的創作）的縮寫，指的是玩家用正版
              LEGO 積木設計並搭建的原創作品。不同於官方套裝，MOC
              是個人想像力的展現，可以是任何東西，例如自創的城堡、車輛或機器人。它讓
              LEGO 迷能跳脫說明書，自由發揮創意，打造獨一無二的作品。
            </p>
          </div>
        </div>

        <div
          class="bg-white rounded-lg shadow-md"
          :class="{ yellowHover: !expanded[1] }"
        >
          <div
            class="flex justify-between items-center p-4 cursor-pointer"
            @click="toggleQA(1)"
          >
            <h2 class="text-lg font-semibold text-gray-700">
              Q: Who can create a LEGO MOC?
            </h2>
            <span
              class="text-2xl text-yellow-500 transition-transform duration-300"
              :class="{ 'rotate-45': expanded[1] }"
            >
              +
            </span>
          </div>
          <div
            v-if="expanded[1]"
            class="p-4 border-t border-gray-200 animate-slide-in"
            :class="{ hidden: !expanded[1] }"
          >
            <p class="text-gray-600">
              任何喜歡 LEGO 的人都可以做
              MOC！不管你是小孩、大人、初學者還是專業玩家，只要有積木和一點創意，就能開始。
              沒有規則限制，你可以用幾塊積木拼個小東西，也可以用上千塊打造複雜作品。重點是享受創作的樂趣！
            </p>
          </div>
        </div>

        <div
          class="bg-white rounded-lg shadow-md"
          :class="{ redHover: !expanded[2] }"
        >
          <div
            class="flex justify-between items-center p-4 cursor-pointer"
            @click="toggleQA(2)"
          >
            <h2 class="text-lg font-semibold text-gray-700">
              Q: : How is the copyright ownership of a MOC determined?
            </h2>
            <span
              class="text-2xl text-red-500 transition-transform duration-300"
              :class="{ 'rotate-45': expanded[2] }"
            >
              +
            </span>
          </div>
          <div
            v-if="expanded[2]"
            class="p-4 border-t border-gray-200 animate-slide-in"
            :class="{ hidden: !expanded[2] }"
          >
            <p class="text-gray-600">
              LLEGO 官方套裝的零件和說明書受 LEGO
              版權保護，可用於個人創作但不能商用。MOC
              本身的設計版權屬於創作者，例如上傳到 Rebrickable
              的作品归設計者所有。若 MOC
              使用他人設計未經授權，則可能侵犯版權。分享時需註明出處，尊重原創精神。
            </p>
          </div>
        </div>

        <div
          class="bg-white rounded-lg shadow-md"
          :class="{ greenHover: !expanded[3] }"
        >
          <div
            class="flex justify-between items-center p-4 cursor-pointer"
            @click="toggleQA(3)"
          >
            <h2 class="text-lg font-semibold text-gray-700">
              Q: : How does MOC creation influence the LEGO community culture?
            </h2>
            <span
              class="text-2xl text-green-500 transition-transform duration-300"
              :class="{ 'rotate-45': expanded[3] }"
            >
              +
            </span>
          </div>
          <div
            v-if="expanded[3]"
            class="p-4 border-t border-gray-200 animate-slide-in"
            :class="{ hidden: !expanded[3] }"
          >
            <p class="text-gray-600">
              MOC 創作促進了 LEGO 社群的互動與創新。玩家分享設計到平台如
              Rebrickable 或展覽，激發靈感並推動技術進步。社群活動（如比賽）因
              MOC 而蓬勃發展，增強了歸屬感。同時，優秀 MOC
              有時影響官方設計，例如 LEGO Ideas 平台上的粉絲提案。
            </p>
          </div>
        </div>

        <div
          class="bg-white rounded-lg shadow-md"
          :class="{ purpleHover: !expanded[4] }"
        >
          <div
            class="flex justify-between items-center p-4 cursor-pointer"
            @click="toggleQA(4)"
          >
            <h2 class="text-lg font-semibold text-gray-700">
              Q: What are the technical challenges of MOC, and how are they
              overcome?
            </h2>
            <span
              class="text-2xl text-purple-500 transition-transform duration-300"
              :class="{ 'rotate-45': expanded[4] }"
            >
              +
            </span>
          </div>
          <div
            v-if="expanded[4]"
            class="p-4 border-t border-gray-200 animate-slide-in"
            :class="{ hidden: !expanded[4] }"
          >
            <p class="text-gray-600">
              MOC 的技術難點包括結構穩定性、零件限制和比例協調。
              例如，大型作品易塌，需用特殊零件加固；稀有零件難找，需替代方案。
              克服方法包括學習 LEGO 工程技巧（如 SNOT 技術）、參考他人作品，
              或用軟體模擬測試。經驗累積是關鍵。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
  data() {
    return {
      expanded: [false, false, false, false, false],
    };
  },
  methods: {
    toggleQA(index) {
      this.expanded = this.expanded.map((state, i) =>
        i === index ? !state : false
      );
    },
  },
};
</script>

<style scoped></style>
