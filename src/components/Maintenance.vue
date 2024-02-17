<<template>
    <div class="maintenance_area">

        <div class="wrapper">

            <div class="maintenance_con">
                <h1>Maintenance Request</h1>
                <div class="header_button">
                    <a href="javascript:;" class="btn orange" @click="maintenance = true">
                        Request Maintenance
                    </a>
                </div>
                <div class="main_body">

                    <div class="default_container">
                        <div class="custom_datatable">
                            <table class="">
                                <colgroup>
                                    <col width="10%"><col width="20%"><col width="20%"><col width="30%"><col width="10%">
                                </colgroup>

                                <thead>
                                    

                                    <tr>
                                        <th class="mainte_room"><span>Room No.</span></th>

                                        <th class="mainte_tenant"><span>Tenant</span></th>

                                        <th class="mainte_date"><span>Date</span></th>

                                    
                                        <th class="mainte_request"><span>Request</span></th>

                                        <th class="tenant_action"><span>Action</span></th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="mainte_room"><span>5</span></td>

                                        <td class="mainte_tenant"><span><strong>Name:</strong> Dr.Strange</span></td>

                                        <td class="mainte_tenant"><span>December 05, 2023</span></td>

                                        <td class="mainte_request"><span>The cr bowl is clogged</span></td>


                                    
                                        <td class="tenant_action">
                                            <a href="javascript:;" class="action edit">
                                            
                                                <svg width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <title/>
                                                    <g id="Complete">
                                                    <g id="edit">
                                                    <g>
                                                    <path d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                                    <polygon fill="none" points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                                    </g>
                                                    </g>
                                                    </g>
                                                </svg>

                                            </a> 
                                            <a href="javascript:;" class="action open_answer">
                                                
                                                <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6M14 10V17M10 10V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                            
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>

                </div>

            </div>

        </div>
        <Maintenance v-if="maintenance" @close="maintenance = false"/>
    </div>
</template>


<script>
import Maintenance from '@/components/Modal/RequestMaintenance';
export default {
    components:{
        Maintenance
    },
    data(){
        return{
            edit_details: false,
            date : null,
            maintenance : false
        }
    }
}
</script>

<style lang="scss" scoped>

</style>