<template>
  <div class="card flex rounded m-5">
    <div class="card__content p-2 w-full">
      <h2 class="card__title font-bold mb-8">Практический JavaScript</h2>
      <p class="mb-3">Курс по изучению практического языка JavaScript и всего что с ним связано</p>
      <div class="table-wraper flex justify-start items-center mb-5 p-1">
        <table class="table table-auto">
          <thead>
            <tr>
              <th>Занятий</th>
              <th>Пройдено</th>
              <th>Прогресс</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>40</td>
              <td>20</td>
              <td>50%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="progress" class="w-full bg-gray rounded-full h-2.5">
        <div class="h-2.5 rounded-full fill-progress" style="width: 50%"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang='scss'>
.card {
  border-radius: 15px;
  width: 280px;
  height: 280px;
  background-image: url('@/assets/img/js.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  cursor: pointer;

  &:hover &__content {
    background: rgba(5, 118, 230, 1);
    transform: translateY(0px);
    transition-duration: 0.4s;

    .card__title {
      text-shadow: none;
    }
  }

  &__title {
    font-size: 20px;
    text-shadow: 0px 4px 2px rgba(150, 150, 150, 1);
  }

  &__content {
    background: rgba(5, 118, 230, 0.5);
    transform: translateY(230px);
    transition-duration: 0.4s;

  }
}

#progress {
  background-color: rgba($color: #000000, $alpha: 0.2);
}

.fill-progress {
  background: #35b3ee;
}

.table-wraper {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.295);
  border-radius: 5px;
}

.table {

  th,
  td {
    padding: 0px 10px 0px 10px;
    font-weight: bold;
    font-size: 17px;
  }

}
</style>