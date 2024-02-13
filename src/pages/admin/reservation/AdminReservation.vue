<template>
    <div class="admin-dashboard">

        <div class="inner_content">

            <div class="inner_main">
                <div class="main_heading">

                    <div class="inner_heading">
                        <h1>Reservation Request</h1> 
                    </div>

                </div>
                <div class="main_body">

                    <div class="default_container">
                        <div class="custom_datatable">
                            <table class="">
                                <colgroup>
                                    <col width="10%"><col width="5%"><col width="10%"><col width="10%"><col width="10%"><col width="10%">
                                </colgroup>

                                <thead>
                                    

                                    <tr>
                                        <th class="tenant_info"><span>Tenant Info</span></th>

                                        <th class="tenant_info"><span>Room No.</span></th>

                                        <th class="tenant_info"><span>Date</span></th>

                                        <th class="tenant_payment"><span>Monthly Payment</span></th>
                                    
                                        <th class="tenant_address"><span>Address</span></th>

                                       
                                    
                                        <th class="tenant_action"><span>Action</span></th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="tenant_info">
                                            <span> <strong>Name:</strong> Dr.Strange</span>
                                            <span> <strong> Contact:</strong> 0234-442-212</span>
                                            <span><strong>Email:</strong> c@gmail.com</span>

                                        </td>
                                        <td class="tenant_info"><span>5</span></td>
                                        <td class="tenant_info"><span>December 05,2023</span></td>


                                        <td class="tenant_address">P<span>5000</span></td>
                                        <td class="tenant_address"><span>Dr.Tojong St. Poblacion, Marikina City</span></td>

                                    
                                        <td class="tenant_action">
                                            <a href="javascript:;" class="action edit">

                                                <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="24" height="24" fill="white"/>
                                                    <path d="M7 17L16.8995 7.10051" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M7 7.00001L16.8995 16.8995" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                                
                                            </a> 
                                            <a href="javascript:;" class="action open_answer">
                                                
                                                <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>