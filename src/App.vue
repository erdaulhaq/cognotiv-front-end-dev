<script setup>
import { ref } from 'vue';

const isHovered = ref(false);
const isHovered2 = ref(false);

const isMainPage = ref(false);
const isVisible = ref(true);

const isAnimatePage2 = ref(false);

const isHoverProduct = ref(false);
const isHoverContact = ref(false);

const goToMain = () => {
  isMainPage.value = true;

  setTimeout(() => {
    isVisible.value = false;
  }, 500);

  setTimeout(() => {
    isAnimatePage2.value = true;
  }, 1000);
};

const goToInit = () => {
  isMainPage.value = false;

  setTimeout(() => {
    isVisible.value = true;
  }, 500);

  setTimeout(() => {
    isAnimatePage2.value = false;
  }, 1000);
};

</script>

<template>
    <div class="h-screen bg-my-img bg-cover	">
        <div v-if="isVisible" class="flex h-[10%] justify-end pr-5 pl-5 pt-10">
          <div class="h-full w-[5rem] mr-5">
            <div 
              :class="{ 'transition-all duration-1000 ease-custom origin-bottom-right scale-x-0': !isHovered, 'transition-all duration-1000 ease-custom origin-bottom-right scale-x-100': isHovered }" 
              class=" relative h-[1rem] w-[5rem] bg-amber-400"> 
            </div>
          </div>
          <div class="h-full w-[10rem]">
            <div
              :class="{ 'transition-all duration-1000 ease-custom origin-bottom-right scale-x-0': !isHovered, 'transition-all duration-1000 ease-custom origin-bottom-right scale-x-100': isHovered }"  
              class=" relative h-[1rem] w-[10rem] bg-amber-400"> 
            </div>
          </div>
        </div>
  
        <div v-if="isVisible" class="h-[80%] flex items-center justify-center ">
          <div class="relative w-961 h-598">
            <div 
              :class="{ 
                'text-[175px] transition-all duration-1000 ease-custom': !isHovered, 
                'text-[185px] transition-all duration-1000 ease-custom': isHovered,
                'transition-all duration-1000 transform translate-y-[-250px] opacity-0 ease-custom': isMainPage
              }" 
              class="z-50 text-amber-400 font-extrabold tracking-wider absolute -top-[8.1rem] -left-[5.7rem]">We Create</div>
            <div
              :class="{ 'transition-all duration-1000 transform translate-x-[250px] opacity-0 ease-custom': isMainPage }"
              class="relative w-961 h-598 overflow-hidden">
              <img 
              @mouseover="isHovered = true"
              @mouseleave="isHovered = false" 
              :class="{ 'filter grayscale transition-all duration-1000 ease-custom transform': !isHovered, 'grayscale-0 scale-110 transition-all duration-1000 ease-custom transform': isHovered }" 
              class="w-full h-full object-cover filter grayscale" 
              src="./assets/img-1.png">
            </div>
           
            
            <div 
              @click="goToMain"
              @mouseover="isHovered2 = true, isHovered = true"
              @mouseleave="isHovered2 = false, isHovered = false"
              class="cursor-pointer">
              <div
                :class="{
                    'transition-all duration-1000 transform translate-x-[-130%] opacity-0 ease-custom': !isHovered2, 
                    'transition-all duration-1000 transform translate-x-[0%] opacity-100 ease-custom': isHovered2}"  
                class="h-[8.5rem] w-[64rem]  bg-amber-400 absolute -bottom-[4rem] -left-[7rem] rounded-lg">
                
              </div>
  
              <div
                :class="{
                  'transition-all duration-1000 transform translate-x-[-130%] opacity-0 ease-custom': !isHovered, 
                  'transition-all duration-1000 transform translate-x-[0%] opacity-100 ease-custom': isHovered,
                  'transition-all duration-1000 text-amber-400':!isHovered2,
                  'transition-all duration-1000 text-white':isHovered2,}" 
                class="z-50 text-amber-400 text-[72px] font-bold tracking-wider absolute -bottom-[3rem] -left-[4.4rem]">
                AWESOME THINGS
              </div>
              <svg
                :class="{ 
                  'transition-all duration-1000 transform translate-x-[200%] opacity-0 ease-custom': !isHovered, 
                  'transition-all duration-1000 transform translate-x-[0%] opacity-100 ease-custom': isHovered,
                  'transition-all duration-1000 text-amber-400':!isHovered2,
                  'transition-all duration-1000 text-white':isHovered2}"  
                class="z-50 h-32 w-32 text-amber-400 absolute -bottom-[4rem] right-[6rem]"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </div>
          </div>
        </div>
  
        <div v-if="isVisible" class="flex h-[10%] pr-5 pl-5 pt-10">
          <div class="h-[1rem] w-[10rem] mr-5">
            <div
              :class="{ 'transition-all duration-1000 ease-custom origin-bottom-left scale-x-0': !isHovered, 'transition-all duration-1000 ease-custom origin-bottom-left scale-x-100': isHovered }"  
              class=" relative h-[1rem] w-[10rem] bg-amber-400"> 
            </div>
          </div>
          <div class="h-[1rem] w-[5rem] ">
            <div 
              :class="{ 'transition-all duration-1000 ease-custom origin-bottom-left scale-x-0': !isHovered, 'transition-all duration-1000 ease-custom origin-bottom-left scale-x-100': isHovered }" 
              class=" relative h-[1rem] w-[5rem] bg-amber-400"> 
            </div>
          </div>
        </div>

        <!-- main menu -->

        <div v-if="isMainPage" class="flex flex-row">
          <div class="relative basis-1/4 h-screen">
            <div
              :class="{ 'transition-all duration-500 ease-custom origin-bottom-left scale-x-0': !isAnimatePage2, 'transition-all duration-500 ease-custom origin-bottom-left scale-x-100': isAnimatePage2 }"   
              class="h-2/6 bg-amber-400">
            </div>
            
            <div class="absolute top-[5%] left-[2.5rem] z-50 cursor-pointer" @click="goToInit">
              <div class="flex items-center">
                <svg
                  :class="{ 'transition-all duration-500 text-black': !isAnimatePage2, 'transition-all duration-500 text-white': isAnimatePage2 }"  
                  class="h-8 w-8"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                </svg>
                <div 
                  :class="{ 'transition-all duration-500 text-black': !isAnimatePage2, 'transition-all duration-500 text-white': isAnimatePage2 }" 
                  class="pl-3 text-2xl tracking-wider">
                  Back
                </div>
              </div>
            </div>
           

            <div class="absolute bottom-[10%] left-[2.5rem] z-50">
                <div class="flex items-center w-[35rem] cursor-pointer">
                  <div class="h-[17px] w-[128px] bg-amber-400 ">
                  </div>
                  <div class="text-amber-400 text-[72px] tracking-wider font-bold	ml-12">
                    About Us
                  </div>
                </div>

                <div class="flex items-center w-[40rem] cursor-pointer"  
                  @mouseover="isHoverProduct = true"
                  @mouseleave="isHoverProduct = false">
                  <div
                    :class="{ 'transition-all duration-1000 ease-custom origin-bottom-left scale-x-0': !isHoverProduct, 'transition-all duration-1000 ease-custom origin-bottom-left scale-x-100': isHoverProduct }"  
                    class="h-[17px] w-[128px] bg-amber-400 ">
                  </div>
                  <div class="text-black text-[72px] tracking-wider font-bold	ml-12 hover:text-opacity-30">
                    Our Product
                  </div>
                </div>

                <div class="flex items-center w-[40rem] cursor-pointer"
                  @mouseover="isHoverContact = true"
                  @mouseleave="isHoverContact = false">
                  <div
                    :class="{ 'transition-all duration-1000 ease-custom origin-bottom-left scale-x-0': !isHoverContact, 'transition-all duration-1000 ease-custom origin-bottom-left scale-x-100': isHoverContact }"   
                    class="h-[17px] w-[128px] bg-amber-400 ">
                  </div>
                  <div class="text-black text-[72px] tracking-wider font-bold	ml-12 hover:text-opacity-30">
                    Contact Us
                  </div>
                </div>
              </div>
          </div>
          <div class="basis-3/4 h-screen relative">
            <img 
              :class="{
                        'transition-all duration-1000 ease-custom': !isAnimatePage2, 
                        'transition-all duration-1000 filter grayscale ease-custom': isAnimatePage2,
                      }"     
              class="w-full h-full object-cover " 
              src="./assets/img-2.png">
              
            <div class="absolute bottom-[10%] right-[5rem] z-50">
              <div
                :class="{
                      'transition-transform duration-1000 transform translate-x-[200%] opacity-0 ease-custom': !isAnimatePage2, 
                      'transition-transform duration-1000 transform translate-x-[0%] opacity-100 ease-custom': isAnimatePage2,
                    }"     
                class="w-[581px] bg-white bg-opacity-60 rounded-2xl shadow-lg pl-14 pt-14 pr-14 pb-14 mb-10">
                <div class="text-[64px] font-bold tracking-wider mb-3">
                  Our People Come First
                </div>

                <div class="text-[36px] font-medium">
                  We are independently owned, strategic creative agency forever curious and ready to transform the way business is done.
                </div>
              </div>

              <div class="flex justify-end">
                <div
                  :class="{
                    'transition-transform duration-1000 transform translate-y-[200%] opacity-0 ease-custom': !isAnimatePage2, 
                    'transition-transform duration-1000 transform translate-y-[0%] opacity-100 ease-custom': isAnimatePage2,
                  }"    
                  class="w-fit bg-amber-400 pt-4 pb-4 pl-10 pr-10 rounded-2xl text-[24px] text-white font-semibold tracking-wider cursor-pointer hover:bg-white hover:bg-opacity-60 hover:text-gray-500">
                  Learn More
                </div>
              </div>
             
            </div>
              
          </div>
        </div>
      </div>


    
</template>

<style scoped>
.ease-custom {
  transition-timing-function: cubic-bezier(.77,.17,0,1);
  /* transition-timing-function: cubic-bezier(.69,.07,.11,.69); */
   /* transition-timing-function: cubic-bezier(.15,.5,.64,.04); */
}
</style>
