<template>
  <GMapMap
    :center="center"
    :options="options"
    :zoom="10"
    map-type-id="terrain"
    class="w-full h-[300px] md:h-[700px]"
  >
    <GMapMarker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="openMarker(m.id)"
    >
      <GMapInfoWindow
        :closeclick="true"
        @closeclick="openMarker(null)"
        :opened="openedMarkerID === m.id"
      >
        <div>We are covering this area - Ikoyi, Lagos {{ m.position }}</div>
      </GMapInfoWindow>
    </GMapMarker>
  </GMapMap>
</template>

<script>
export default {
  data() {
    return {
      openedMarkerID: null,
      center: { lat: 6.4281, lng: 3.4219 },
      markers: [
        {
          id: 1,
          position: {
            lat: 6.45,
            lng: 3.4333,
          },
        },
        {
          id: 2,
          position: {
            lat: 6.6018,
            lng: 3.3515,
          },
        },
        {
          id: 3,
          position: {
            lat: 6.5392,
            lng: 3.3842,
          },
        },
        {
          id: 4,
          position: {
            lat: 6.6194,
            lng: 3.5105,
          },
        },
      ],
      options: {
        styles: [
          {
            featureType: "administrative",
            elementType: "geometry",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "administrative.country",
            elementType: "labels.text.fill",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "poi",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "road",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "road",
            elementType: "labels.icon",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "transit",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
        ],
      },
    };
  },
  methods: {
    openMarker(id) {
      this.openedMarkerID = id;
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
</style>
