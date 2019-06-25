<template>
    <div>
        <visitor-pie :pieData="pieData"></visitor-pie>
    </div>
</template>

<script>
    import visitorPie from '@/components/visitorPie'
    export default {
    	data(){
    		return {
    			pieData: {},
    		}
    	},
    	components: {
            visitorPie,
    	},
    	mounted(){
            this.initData();
    	},
    	methods: {
            initData(){
    			this.pieData={
                        "employeeNum": 20,
                        "checkedUserNum": 20,
                        "uncheckedUserNum": 20,
                }
    		},
    	}
    }
</script>

<style scoped>
	
</style>
