<template>
  <section class="flex-Team">

    <div class="container--medium">
      <div class="inner">
        <h2>Meet the team</h2>
      </div>
    </div>

    <div class="container-type--team container--medium">
      <div class="background-clipped"></div>
      <div class="inner container-col">
        <template v-for="(item, index) in team">
          <TeamItem :item="item" :key="index" />
        </template>
      </div>
    </div>

  </section>
</template>

<script>
import team from "@/apollo/queries/team";
import TeamItem from "@/components/elements/flex/TeamItem";

export default {
  props: ["item"],
  name: "FlexTeam",
  data() {
    return {};
  }, // End data
  components: {
    TeamItem,
  },
  apollo: {
    team: {
      prefetch: true,
      query: team,
      update(data) {
        const items = data.team.nodes;

        // ↩️ Return the data
        return items;
      },
    },
  },
};
</script>