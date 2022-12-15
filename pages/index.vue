<template>
    <div :style="{ 
        backgroundImage: `url('/img/bg.jpg')`,
        width: '100%',
        height: '100%'
    }">
        <div :style="{ 
            width: '80%',
            margin: 'auto',
            height: '100%'
        }">
        
            <br>    
            <div :style="{ 
                width: '100%',
                height: '70px',
                backgroundColor: '#ffffff0f',
                borderRadius: '10px',
                backdropFilter: 'blur(10px)',
                paddingLeft: '8px',
            }">
                <div v-for="menu in menus" :style="{
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                    backgroundColor: '#ffffff',
                    marginTop: '10px',
                    marginRight: '7px',
                    float: 'left'
                }"/>

            </div>
        </div>

    </div>
</template>


<script setup lang="ts">

const menus = ref([
    'img',
    'img',
    'img'
])

</script>
