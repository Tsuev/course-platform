<template>
    <div class="profile flex">
        <BlockContent>
            <div class="profile__card">
                <div class="card__header flex items-center flex-col">
                    <div class="header__card__bg w-80"></div>
                    <div class="card__avatar">
                        <img class="rounded-full border-blue w-28"
                            src="@/assets/img/avatar/week.png"
                            alt="">
                    </div>
                    <div class="card__username">Джон Уик</div>
                </div>
                <div class="card__info">
                    <div id="progress" class="w-full bg-gray rounded-full h-2.5">
                        <div class="h-2.5 rounded-full fill-progress" style="width: 50%"></div>
                    </div>
                </div>
            </div>
        </BlockContent>
        <BlockContent>
            <h1>test</h1>
        </BlockContent>
    </div>
</template>

<script setup>

</script>

<style lang='scss'>
.profile__card {
    .card__header {
        .header__card__bg {
            height: 100px;
            background: rgba(5, 118, 230, 1);
            border-radius: 16px 16px 0px 0px;
        }
        .card__avatar {
            margin-top: -50px;
        }
        .card__username {
            margin-top: 15px;
        }
    }
}
</style>