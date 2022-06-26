<template>
  <BlockContent title="Настройка среды" btnTxt="Страница курса">
    <div class="video w-full my-5">
      <iframe
        width="100%"
        height="500"
        src="https://www.youtube.com/embed/qLblBEtINKs"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>

    <div class="abstract mb-8">
      <div class="abstract__title mb-5 flex justify-between">
        <h2>Конспект по уроку</h2>
        <a href="https://superior5.github.io/htmlEditor/">
          <UiButton>
            Перейти в тренажер
          </UiButton>
        </a>
      </div>
      <div class="abstract__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        labore eos odit quas architecto id accusamus, dolorum, sunt libero
        perspiciatis distinctio cumque quo magnam blanditiis quasi repudiandae
        dolore sint alias! Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Debitis sapiente, magni itaque enim est tenetur inventore quasi
        quidem quia recusandae a dolorum magnam maxime sequi error omnis. Quas,
        repellendus temporibus. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Soluta ratione, ut nulla recusandae doloribus ducimus
        tempora delectus explicabo magni voluptatum, velit similique quis eaque
        rem, molestiae minus nemo cum pariatur. Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Officiis eligendi commodi aspernatur
        debitis adipisci dolorum accusantium temporibus voluptatem.
        <div class="flex justify-center">
<iframe
  src="https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C0%29&t=seti&wt=none&l=htmlmixed&width=408.25&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Ch1%253E%2520Hello%2520word%2520%253C%252Fh1%253E%250A%253Ch2%253E%25D0%259C%25D0%25B0%25D0%25B3%25D0%25BE%25D0%25BC%25D0%25B5%25D0%25B4-%25D0%2590%25D0%25BB%25D0%25B8%253C%252Fh2%253E%250A%253Ch3%253E%25D0%259C%25D0%25B0%25D0%25BD%25D1%2581%25D1%2583%25D1%2580%253C%252Fh3%253E%250A%253Ch4%253E%25D0%2594%25D0%25B0%25D1%2583%25D0%25B4%253C%252Fh4%253E"
  style="width: 408px; height: 243px; border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>
        </div>
        Cum incidunt maiores facere labore! Et exercitationem possimus molestiae
        expedita sequi, enim in voluptates ut id, animi omnis hic sapiente alias
        delectus obcaecati neque facilis, aperiam saepe. Animi aliquam facilis
        delectus in? Libero aliquid voluptate natus ea dolorem consequatur saepe
        eligendi odit harum mollitia ullam deleniti, praesentium eveniet non
        magnam nulla quo alias unde aut vel distinctio quam nemo sed reiciendis?
        Fugiat optio quidem eaque mollitia provident atque corporis magnam
        ratione totam illo? Totam magni debitis quisquam maiores? Qui cupiditate
        quasi expedita. Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Officiis eligendi commodi aspernatur debitis adipisci dolorum
        accusantium temporibus voluptatem. Cum incidunt maiores facere labore!
        Et exercitationem possimus molestiae expedita sequi, enim in voluptates
        ut id, animi omnis hic sapiente alias delectus obcaecati neque facilis,
        aperiam saepe. Animi aliquam facilis delectus in? Libero aliquid
        voluptate natus ea dolorem consequatur saepe eligendi odit harum
        mollitia ullam deleniti, praesentium eveniet non magnam nulla quo alias
        unde aut vel distinctio quam nemo sed reiciendis? Fugiat optio quidem
        eaque mollitia provident atque corporis magnam ratione totam illo? Totam
        magni debitis quisquam maiores? Qui cupiditate quasi expedita.
      </div>
    </div>
  </BlockContent>
</template>

<script setup></script>

<style lang="scss">
.abstract {
  &__title {
    font-size: 25px;
  }

  &__text {
    overflow-y: scroll;
    scrollbar-width: auto;
    scrollbar-color: #0582da #ffffff00;
    text-align: justify;
    font-size: 20px;

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
