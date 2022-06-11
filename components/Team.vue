<template>
  <div class="flex flex-col mt-4 mb-5">
    <div
      class="flex flex-nowrap flex-col md:flex-row w-full justify-evenly md:-space-x-44"
    >
      <img
        class="max-w-screen-md lg:max-w-2xl h-full w-full md:-ml-10 z-0 self-center"
        src="~/assets/images/team.svg"
        alt=""
      />
      <div class="flex flex-col justify-center gap-10 z-10">
        <p class="text-center font-bold text-4xl md:text-5xl text-primary-900">Team</p>
        <div
          class="max-w-screen-sm lg:max-w-lg md:max-w-2xl grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 justify-center gap-4 items-stretch px-4 md:px-0"
        >
          <!-- CARDS -->
          <div
            class="flex flex-col items-center rounded-lg shadow-lg shadow-primary-900/10 bg-primary-5 px-4 py-1.5 md:px-6 md:py-3"
            v-for="member in team_members"
            :key="member.id"
          >
            <div class="relative bg-gradient-to-br from-primary-700 via-primary-900 to-primary-900 p-1 rounded-full mb-2 flex-none w-full max-w-[10rem]">
              <img
                class="rounded-full w-full h-full"
                v-bind:src="member.profile"
                v-bind:alt="member.name"
              />
              <div
                @click="redirect(member.github)"
                class="transition ease-out opacity-0 hover:opacity-100 duration-500 absolute flex items-center justify-center top-0 left-0 bg-black bg-opacity-50 h-full w-full rounded-full"
              >
                <img
                  class="max-h-20 bg-black rounded-full cursor-pointer"
                  src="~/assets/icons/github-white.png"
                  alt="Github"
                />
              </div>
            </div>
            <p
              @click="redirect(member.github)"
              class="font-medium text-center text-md md:text-md underline lg:no-underline text-primary-900 mt-2"
            >
              {{ member.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col md:flex-row justify-center md:justify-end mt-24">
      <div class="flex flex-col justify-center gap-10 z-10">
        <p class="text-center font-bold text-4xl md:text-5xl text-primary-900">Supervisors</p>

        <div
          class="max-w-screen-sm lg:max-w-lg md:max-w-2xl grid grid-cols-2 grid-rows-1 justify-center gap-2 md:gap-4 items-stretch"
        >
          <!-- CARDS -->
          <div
            class="flex flex-col items-center rounded-lg shadow-lg shadow-primary-900/10 bg-primary-5 px-6 py-3"
            v-for="supervisor in supervisors"
            :key="supervisor.id"
          >
            <div class="relative bg-gradient-to-br from-primary-700 via-primary-900 to-primary-900 p-1 rounded-full mb-2 flex-none w-full max-w-[10rem]">
              <img
                class="rounded-full w-full h-full"
                v-bind:src="supervisor.profile"
                v-bind:alt="supervisor.name"
              />
              <div
                @click="redirect(supervisor.ua)"
                class="transition ease-out opacity-0 hover:opacity-100 duration-500 absolute flex items-center justify-center top-0 left-0 bg-black bg-opacity-50 h-full w-full rounded-full"
              >
                <img
                  class="max-h-20 cursor-pointer"
                  src="~/assets/icons/ua-white.png"
                  alt="University of Aveiro"
                />
              </div>
            </div>
            <p
              @click="redirect(supervisor.ua)"
              class="font-medium text-center text-xl md:text-md underline lg:no-underline text-primary-900 mt-2"
            >
              {{ supervisor.name }}
            </p>
          </div>
        </div>
        <p class="mt-16 text-center font-bold text-4xl md:text-5xl text-primary-900">Stakeholders</p>

        <a href="https://www.camelias.pt/" target="_blank" class="py-7 px-4 rounded-lg shadow-lg shadow-primary-900/10 flex items-center justify-center bg-white" >
          <img src="https://www.camelias.pt/assets/images/logo_apc.jpg" alt="Associação Portuguesa das Camélias"/>
        </a>
      </div>
      <img
        class="max-w-screen-md lg:max-w-2xl h-full w-full md:-mr-24 z-0 self-end"
        src="~/assets/images/marketing-officer_1.svg"
        alt=""
      />
    </div>

  </div>
</template>

<script>
function onHoverChangeClass(hover) {
  if (hover) {
    return "";
  } else {
    return "hidden";
  }
}

function redirectTo(link) {
  window.open(link);
}

export default {
  name: "Team",
  data() {
    return {
      team_members: [
        {
          id: 1,
          name: "Fábio Martins",
          profile:
            "https://cdn.discordapp.com/attachments/951969758864105528/958121256941682688/Fabio_2.jpg",
          github: "https://github.com/fMart8421",
        },
        {
          id: 2,
          name: "Nuno Fahla",
          profile:
            "https://cdn.discordapp.com/attachments/951969758864105528/958121256216035368/chrome_N8OGcvrGxH.png",
          github: "https://github.com/broth2",
        },
        {
          id: 3,
          name: "Patrícia Dias",
          profile:
            "https://cdn.discordapp.com/attachments/951969758864105528/958121255976968202/chrome_3MPCBwfm4Y.png",
          github: "https://github.com/Patricia-Dias",
        },
        {
          id: 4,
          name: "Sophie Pousinho",
          profile:
            "https://cdn.discordapp.com/attachments/951969758864105528/958121256727756870/chrome_wfLsvOvI93.png",
          github: "https://github.com/sophjane",
        },
        {
          id: 5,
          name: "Tiago Matos",
          profile:
            "https://cdn.discordapp.com/attachments/784541349126733825/985246031199502436/unknown.png",
          github: "https://github.com/tiagomrm",
        },
        {
          id: 6,
          name: "Vitor Dias",
          profile:
            "https://cdn.discordapp.com/attachments/951969758864105528/958121256455131196/chrome_W1ItPMiKMG.png",
          github: "https://github.com/vitordiasua",
        },
      ],
      supervisors: [
        {
          id: 1,
          name: "Guilherme Campos",
          profile:
            "https://cdn.discordapp.com/attachments/951969758864105525/966037090783621261/unknown.png",
          ua: "https://www.ua.pt/pt/p/10321401",
        },
        {
          id: 2,
          name: "Hélder Zagalo",
          profile:
            "https://cdn.discordapp.com/attachments/951969758864105525/966037090519355472/unknown.png",
          ua: "https://www.ua.pt/pt/p/10316375",
        },
      ],
      hover: false,
      hover_class: onHoverChangeClass,
      redirect: redirectTo,
    };
  },
};
</script>
