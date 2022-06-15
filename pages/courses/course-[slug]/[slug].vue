<template>
  <BlockContent title="Настройка среды" btnTxt="Страница курса">
    <div class="video w-full my-5">
      <iframe width="100%" height="500" src="https://www.youtube.com/embed/qLblBEtINKs" title="YouTube video player"
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    </div>

    <div class="abstract mb-8">
      <div class="abstract__title mb-5">
        <h2>Конспект по уроку</h2>
      </div>
      <div class="abstract__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi labore eos odit quas architecto id accusamus,
        dolorum, sunt libero perspiciatis distinctio cumque quo magnam blanditiis quasi repudiandae dolore sint alias!

        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis sapiente, magni itaque enim est tenetur
        inventore quasi quidem quia recusandae a dolorum magnam maxime sequi error omnis. Quas, repellendus temporibus.

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ratione, ut nulla recusandae doloribus ducimus
        tempora delectus explicabo magni voluptatum, velit similique quis eaque rem, molestiae minus nemo cum pariatur.

        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis eligendi commodi aspernatur debitis adipisci
        dolorum accusantium temporibus voluptatem. Cum incidunt maiores facere labore! Et exercitationem possimus
        molestiae expedita sequi, enim in voluptates ut id, animi omnis hic sapiente alias delectus obcaecati neque
        facilis, aperiam saepe. Animi aliquam facilis delectus in? Libero aliquid voluptate natus ea dolorem consequatur
        saepe eligendi odit harum mollitia ullam deleniti, praesentium eveniet non magnam nulla quo alias unde aut vel
        distinctio quam nemo sed reiciendis? Fugiat optio quidem eaque mollitia provident atque corporis magnam ratione
        totam illo? Totam magni debitis quisquam maiores? Qui cupiditate quasi expedita.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis eligendi commodi aspernatur debitis adipisci
        dolorum accusantium temporibus voluptatem. Cum incidunt maiores facere labore! Et exercitationem possimus
        molestiae expedita sequi, enim in voluptates ut id, animi omnis hic sapiente alias delectus obcaecati neque
        facilis, aperiam saepe. Animi aliquam facilis delectus in? Libero aliquid voluptate natus ea dolorem consequatur
        saepe eligendi odit harum mollitia ullam deleniti, praesentium eveniet non magnam nulla quo alias unde aut vel
        distinctio quam nemo sed reiciendis? Fugiat optio quidem eaque mollitia provident atque corporis magnam ratione
        totam illo? Totam magni debitis quisquam maiores? Qui cupiditate quasi expedita.
      </div>
    </div>
    <UiButton>
      Перейти в тренажер
    </UiButton>
  </BlockContent>
</template>

<script setup>
</script>

<style lang='scss'>
.abstract {
  &__title {
    font-size: 25px;
  }

  &__text {
    overflow-y: scroll;
    scrollbar-width: auto;
    scrollbar-color: #0582da #ffffff00;
    max-height: 200px;

    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-track {
      background: #ffffff00;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #0582da;
      border-radius: 10px;
      border: 3px solid #ffffff00;
    }
  }
}
</style>