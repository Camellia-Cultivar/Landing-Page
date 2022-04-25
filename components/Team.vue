<template>
  <div class="container-centered-90 flex flex-col mt-4 mb-5">
    <div
      class="self-start flex flex-nowrap flex-col md:flex-row w-full justify-evenly"
    >
      <img
        class="max-w-screen-md lg:max-w-2xl h-full w-full -ml-24 z-0 self-center"
        src="~/assets/images/team.svg"
        alt=""
      />
      <div class="">
        <p class="text-center font-bold text-4xl md:text-5xl text-primary-dark -mt-6">Team</p>
        <div
          class="grid gap-y-8 sm:grid-cols-2 sm:gap-x-20 sm:gap-y-12 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-16 mt-20"
        >
          <div
            class="flex flex-col items-center bg-gray-50 pt-4 pb-5 px-7 rounded-lg shadow"
            v-for="member in team_members"
            :key="member.id"
          >
            <div class="relative bg-primary-dark p-1 rounded-full mb-2">
              <img
                class="rounded-full max-h-35"
                v-bind:src="member.profile"
                v-bind:alt="member.name"
              />
              <div
                @click="redirect(member.github)"
                class="transition ease-out opacity-0 hover:opacity-100 duration-500 absolute flex items-center justify-center top-0 left-0 bg-black bg-opacity-50 h-full w-full rounded-full"
              >
                <img
                  class="max-h-25 bg-black rounded-full"
                  src="~/assets/icons/github-white.png"
                  alt="Github"
                />
              </div>
            </div>
            <p
              @click="redirect(member.github)"
              class="font-medium text-center text-lg underline lg:no-underline text-primary-dark mt-2"
            >
              {{ member.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
<div class="flex justify-evenly mt-24">
<div class=" flex flex-col justify-center">
      <p class="font-bold text-3xl text-center text-primary-dark">Supervisors</p>
    
    <div
      class="grid gap-y-8 sm:gap-y-0 sm:gap-x-20 sm:grid-cols-2 gap-x-25 mt-16"
    >
      <div
        class="flex flex-col items-center bg-gray-50 pt-4 pb-5 px-8 rounded-lg shadow"
        v-for="supervisor in supervisors"
        :key="supervisor.id"
      >
        <div class="relative bg-primary-dark p-1 rounded-full mb-2">
          <img
            class="rounded-full max-h-35 sm:max-h-50"
            v-bind:src="supervisor.profile"
            v-bind:alt="supervisor.name"
          />
          <div
            @click="redirect(supervisor.ua)"
            class="transition ease-out opacity-0 hover:opacity-100 duration-500 absolute flex items-center justify-center top-0 left-0 bg-black bg-opacity-75 h-full w-full rounded-full"
          >
            <img class="max-h-35" src="~/assets/icons/ua-white.png" alt="UA" />
          </div>
        </div>
        <p class="font-medium text-center text-lg text-primary-dark mt-2">
          {{ supervisor.name }}
        </p>
      </div>
    </div>
    </div>
    <img
        class="max-w-screen-md lg:max-w-2xl h-full w-full -mr-24 z-0 self-end"
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
            "https://media-exp1.licdn.com/dms/image/C5603AQFMBoXcpjEFZg/profile-displayphoto-shrink_800_800/0/1635358918029?e=1654128000&v=beta&t=obhoTc8ZKuh7YfBn_8o7oQHvdoDS8sVVXSwxcWgge7U",
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
