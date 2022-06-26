<template>
  <BlockContent title="Практический JavaScript" btnTxt="Курсы">
    <div class="title"></div>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Тема</th>
          <th>Домашнее задание</th>
          <th>Конспект</th>
          <th>Видео</th>
          <th>Максимум баллов</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>
            <NuxtLink to="/courses/course-1/1"> Настройка среды</NuxtLink>
          </td>
          <td>Есть</td>
          <td>Есть</td>
          <td>Есть</td>
          <td>5</td>
        </tr>
        <tr>
          <td>1</td>
          <td>
            <NuxtLink to="/courses/course-1/1"> Настройка среды</NuxtLink>
          </td>
          <td>Есть</td>
          <td>Есть</td>
          <td>Есть</td>
          <td>5</td>
        </tr>
        <tr>
          <td>1</td>
          <td>
            <NuxtLink to="/courses/course-1/1"> Настройка среды</NuxtLink>
          </td>
          <td>Есть</td>
          <td>Есть</td>
          <td>Есть</td>
          <td>5</td>
        </tr>
      </tbody>
    </table>
  </BlockContent>
</template>

<script setup></script>

<style lang="scss" scoped>
table {
  width: 100%;
}

thead {
  background: rgb(5, 130, 218);
  text-transform: uppercase;
}

th,
td {
  padding: 15px;
  text-align: left;
  font-size: 17px;
}

table tr:nth-child(even) {
  background-color: rgba(79, 165, 226, 0.8);
}

tbody tr {
  cursor: pointer;
  transition-duration: 0.2s;

  &:hover {
    transition-duration: 0.2s;
    border-radius: 5px;
    box-shadow: 0px 0px 13px 10px rgba(5, 130, 218, 0.5);
  }
}
</style>
