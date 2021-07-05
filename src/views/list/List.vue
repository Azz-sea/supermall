<template>
  <div class="wrapper">
    <ul class="content">
      <li>1s</li>
      <li>2s</li>
      <li>3s</li>
      <li>4s</li>
      <li>5s</li>
      <li>6s</li>
      <li>7s</li>
      <li>8s</li>
      <li>9s</li>
      <li>10s</li>
      <li>11s</li>
      <li>12s</li>
      <li>13s</li>
      <li>14s</li>
      <li>15s</li>
      <li>16s</li>
      <li>17s</li>
      <li>18s</li>
      <li>19s</li>
      <li>20s</li>
      <li>21s</li>
      <li>22s</li>
      <li>23s</li>
      <li>24s</li>
      <li>25s</li>
      <li>26s</li>
      <li>27s</li>
      <li>28s</li>
      <li>29s</li>
      <li>30s</li>
      <li>31s</li>
      <li>32s</li>
      <li>33s</li>
      <li>34s</li>
      <li>35s</li>
      <li>36s</li>
      <li>37s</li>
      <li>38s</li>
      <li>39s</li>
      <li>40s</li>
      <li>41s</li>
      <li>42s</li>
      <li>43s</li>
      <li>44s</li>
      <li>45s</li>
      <li>46s</li>
      <li>47s</li>
      <li>48s</li>
      <li>49s</li>
      <li>50s</li>
      <li>51s</li>
      <li>52s</li>
      <li>53s</li>
      <li>54s</li>
      <li>55s</li>
      <li>56s</li>
      <li>57s</li>
      <li>58s</li>
      <li>59s</li>
      <li>60s</li>
      <li>61s</li>
      <li>62s</li>
      <li>63s</li>
      <li>64s</li>
      <li>65s</li>
      <li>66s</li>
      <li>67s</li>
      <li>68s</li>
      <li>69s</li>
      <li>70s</li>
      <li>71s</li>
      <li>72s</li>
      <li>73s</li>
      <li>74s</li>
      <li>75s</li>
      <li>76s</li>
      <li>77s</li>
      <li>78s</li>
      <li>79s</li>
      <li>80s</li>
      <li>81s</li>
      <li>82s</li>
      <li>83s</li>
      <li>84s</li>
      <li>85s</li>
      <li>86s</li>
      <li>87s</li>
      <li>88s</li>
      <li>89s</li>
      <li>90s</li>
      <li>91s</li>
      <li>92s</li>
      <li>93s</li>
      <li>94s</li>
      <li>95s</li>
      <li>96s</li>
      <li>97s</li>
      <li>98s</li>
      <li>99s</li>
      <li>100s</li>
    </ul>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  data() {
    return {
      scroll: null,
    };
  },

  mounted() {
    this.scroll = new BScroll(".wrapper", {
      probeType: 3,
      pullUpLoad: true,
    });
    // this.scroll.on("scroll", (position) => {
    //   console.log(position);
    // });
    this.scroll.on("pullingUp", () => {
      console.log("ok");
    });
  },
};
</script>

<style scoped>
.wrapper {
  height: 150px;

  overflow: hidden;
}
</style>