<template>
  <div id="one-room">
    <div v-for="(oneRoom, i) in oneRooms" :key="i">
      <h4>{{ oneRoom.product }}</h4>
      <p v-for="(price, j) in oneRoom.prices" :key="j">{{ price }} 만원</p>
      <button @click="report(oneRoom)">허위매물신고 {{ oneRoom.reportCnt }}</button>
    </div>
    <hr/>
    <button @click="priceHalf">반값으로 만들기</button>
  </div>
</template>

<script>
const URL = "https://picsum.photos/v2/list?page=2&limit=100%E2%80%8B";

export default {
    name: 'OneRoom',
    data() {
        return {
            oneRooms: [
                { product: '역삼동원룸', prices: [50, 60, 80], reportCnt: 0 },
                { product: '천호동원룸', prices: [100], reportCnt: 0 },
                { product: '마포구원룸', prices: [1000], reportCnt: 0 },
            ],
        }
    },
    methods: {
        priceHalf() {
            for (let i = 0; i < this.oneRooms.length; i++) {
                let modify = this.oneRooms[i].prices.map(function (price) {
                    return price / 2;
                })
                console.log(modify)
                this.oneRooms[i].prices = modify;
            }
        },
        report(target) {
            target.reportCnt += 1;
        },
        getData() {
            this.$axios
            .get(URL)
            .then((res) => {
                console.log(res.status)
                console.log(res.data)
            })
            .catch((error)=> {
                console.log(error)
            })
            .finally(() => {
                console.log('마지막실행')
            })
        }
    }
}
</script>

<style>
    #one-room {
        display: flex;
        text-align: center;
        padding: 30px;
    }
</style>
