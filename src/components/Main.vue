<<template>
    <div class="main_area">
        <div class="wrapper">
            <div class="main_con">
                <div class="search_con">
                    <div class="search_box">
                        <input class="search_input" type="text" placeholder="Search place or boarding house"/>
                        <button class="search_button">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11V11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="#bababa"></path></svg>
                        </button>
                    </div>
                    <div class="filter_con">
                        <div class="price_range_con">
                            <h4>Price Range</h4>
                            <div class="price_range">
                                <button type="button" :class="active" @click="price_dropdown = !price_dropdown">4000 - 5000</button>
                                <ul class="dropdown" v-if="price_dropdown">
                                    <li :class="active"><span>5000 and above</span></li>
                                    <li><span>4000 - 5000</span></li>
                                    <li><span>1500 - 4000</span></li>
                                    <li><span>1500 and below</span></li>
                                </ul>
                            </div>
                        </div>
                        <div class="price_range_con">
                            <h4>Room Capacity</h4>
                            <div class="price_range">
                                <button type="button" :class="active" @click="capacity_dropdown = !capacity_dropdown">1</button>
                                <ul class="dropdown" v-if="capacity_dropdown">
                                    <li :class="active"><span>1</span></li>
                                    <li><span>2</span></li>
                                    <li><span>3</span></li>
                                    <li><span>4</span></li>
                                    <li><span>5</span></li>
                                </ul>
                            </div>
                        </div>
                        <div class="price_range_con">
                            <h4>Room Type</h4>
                            <div class="price_range">
                                <button type="button" :class="active" @click="room_type_dropdown = !room_type_dropdown">Single</button>
                                <ul class="dropdown" v-if="room_type_dropdown">
                                    <li :class="active"><span>Single</span></li>
                                    <li><span>Double</span></li>
                                    <li><span>Suite</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="room_boxes">
                    <div class="room_box" v-for="room in rooms">
                        <img :src="room.images[0]"/>
                        <div class="room_details">
                            <h2>{{ room.house_name }}</h2>
                            <p class="room_address"> {{ room.address }}</p>
                            <div class="room_cont">
                               <div class="flex_box">
                                    <p class="room_capacity">Good for {{ room.capacity }}</p> 
                                    <p class="room_electric">{{ room.electricity }}</p>
                                    <p class="room_water">{{ room.water }}</p>
                               </div>
                                <p class="room_price"><span>₱{{room.price}}</span> / month</p>     
                            </div>
                            <div class="room_rating">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style="display: block; height: 12px; width: 12px; fill: currentcolor;" aria-hidden="true" role="presentation" focusable="false"><path fill-rule="evenodd" d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"></path></svg>
                                <span>{{ room.rate }}</span>
                            </div>
                            <button class="reservation" type="button" @click="reserveBtn()">Reservation</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="calendar_con" v-if="reserve_popup">
            <a href="javascript:;" class="calendar_close" @click="reserve_popup = false">
                <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="24" height="24" fill="white"/>
                        <path d="M7 17L16.8995 7.10051" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7 7.00001L16.8995 16.8995" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </a>
            <div class="calendar_picker">
                <h4>Pick your date for reservation</h4>
                <DatePicker v-model.range="range" mode="dateTime" :min-date="new Date()"/>
                <div class="calendar_btn">
                    <button @click="reserve_popup = false">Cancel</button>
                    <button>Proceed</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Calendar,DatePicker } from 'v-calendar';
export default {
    components: {
        Calendar,
        DatePicker
    },
    data(){
        return{
            rooms:[
                {
                    house_name : 'Angels Dormitory',
                    address : 'Cebu City',
                    introduction : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,"',
                    images : [
                        'https://a0.muscache.com/im/pictures/53efff39-8ad1-4a94-b678-a9f614eaed0a.jpg?im_w=720',
                        'https://a0.muscache.com/im/pictures/53efff39-8ad1-4a94-b678-a9f614eaed0a.jpg?im_w=720',
                        'https://a0.muscache.com/im/pictures/53efff39-8ad1-4a94-b678-a9f614eaed0a.jpg?im_w=720'],
                    rate : 4.8,
                    price : 5000,
                    water : 100,
                    electricity : 'metered',
                    capacity : 2,
                },
                {
                    house_name : 'Bmax Apartelle',
                    address : 'Pardo City',
                    introduction : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,"',
                    images : [
                        'https://a0.muscache.com/im/pictures/53efff39-8ad1-4a94-b678-a9f614eaed0a.jpg?im_w=720',
                        'https://a0.muscache.com/im/pictures/53efff39-8ad1-4a94-b678-a9f614eaed0a.jpg?im_w=720',
                        'https://a0.muscache.com/im/pictures/53efff39-8ad1-4a94-b678-a9f614eaed0a.jpg?im_w=720'
                    ],
                    rate : 5,
                    price : 5000,
                    water : 'free',
                    electricity : 'metered',
                    capacity : 2,
                },
                {
                    house_name : 'Angels Dormitory',
                    address : 'Cebu City',
                    introduction : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,"',
                    images : [
                        'https://a0.muscache.com/im/pictures/53efff39-8ad1-4a94-b678-a9f614eaed0a.jpg?im_w=720',
                        'https://a0.muscache.com/im/pictures/53efff39-8ad1-4a94-b678-a9f614eaed0a.jpg?im_w=720',
                        'https://a0.muscache.com/im/pictures/53efff39-8ad1-4a94-b678-a9f614eaed0a.jpg?im_w=720'
                    ],
                    rate : 4.8,
                    price : 5000,
                    water : 100,
                    electricity : 'metered',
                    capacity : 2,
                },
                {
                    house_name : 'Bmax Apartelle',
                    address : 'Pardo City',
                    introduction : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,"',
                    images : [
                        'https://a0.muscache.com/im/pictures/53efff39-8ad1-4a94-b678-a9f614eaed0a.jpg?im_w=720',
                        'https://a0.muscache.com/im/pictures/53efff39-8ad1-4a94-b678-a9f614eaed0a.jpg?im_w=720',
                        'https://a0.muscache.com/im/pictures/53efff39-8ad1-4a94-b678-a9f614eaed0a.jpg?im_w=720'
                    ],
                    rate : 4.9,
                    price : 5000,
                    water : 'free',
                    electricity : 'metered',
                    capacity : 2,
                },
                {
                    house_name : 'Bmax Apartelle',
                    address : 'Pardo City',
                    introduction : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,"',
                    images : [
                        'https://a0.muscache.com/im/pictures/53efff39-8ad1-4a94-b678-a9f614eaed0a.jpg?im_w=720',
                        'https://a0.muscache.com/im/pictures/53efff39-8ad1-4a94-b678-a9f614eaed0a.jpg?im_w=720',
                        'https://a0.muscache.com/im/pictures/53efff39-8ad1-4a94-b678-a9f614eaed0a.jpg?im_w=720'
                    ],
                    rate : 5,
                    price : 5000,
                    water : '300',
                    electricity : 'metered',
                    capacity : 2,
                },
                {
                    house_name : 'Angels Dormitory',
                    address : 'Cebu City',
                    introduction : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,"',
                    images : [
                        'https://a0.muscache.com/im/pictures/53efff39-8ad1-4a94-b678-a9f614eaed0a.jpg?im_w=720',
                        'https://a0.muscache.com/im/pictures/53efff39-8ad1-4a94-b678-a9f614eaed0a.jpg?im_w=720',
                        'https://a0.muscache.com/im/pictures/53efff39-8ad1-4a94-b678-a9f614eaed0a.jpg?im_w=720'
                    ],
                    rate : 4.9,
                    price : 5000,
                    water : '300',
                    electricity : 'metered',
                    capacity : 2,
                },
                {
                    house_name : 'Bmax Apartelle',
                    address : 'Pardo City',
                    introduction : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,"',
                    images : [
                        'https://a0.muscache.com/im/pictures/53efff39-8ad1-4a94-b678-a9f614eaed0a.jpg?im_w=720',
                        'https://a0.muscache.com/im/pictures/53efff39-8ad1-4a94-b678-a9f614eaed0a.jpg?im_w=720',
                        'https://a0.muscache.com/im/pictures/53efff39-8ad1-4a94-b678-a9f614eaed0a.jpg?im_w=720'
                    ],
                    rate : 5,
                    price : 5000,
                    water : '300',
                    electricity : 'metered',
                    capacity : 2,
                },
                {
                    house_name : 'Angels Dormitory',
                    address : 'Cebu City',
                    introduction : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,"',
                    images : [
                        'https://a0.muscache.com/im/pictures/53efff39-8ad1-4a94-b678-a9f614eaed0a.jpg?im_w=720',
                        'https://a0.muscache.com/im/pictures/53efff39-8ad1-4a94-b678-a9f614eaed0a.jpg?im_w=720',
                        'https://a0.muscache.com/im/pictures/53efff39-8ad1-4a94-b678-a9f614eaed0a.jpg?im_w=720'
                    ],
                    rate : 4.9,
                    price : 5000,
                    water : '300',
                    electricity : 'metered',
                    capacity : 2,
                },
                {
                    house_name : 'Bmax Apartelle',
                    address : 'Cebu City',
                    introduction : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,"',
                    images : [
                        'https://a0.muscache.com/im/pictures/53efff39-8ad1-4a94-b678-a9f614eaed0a.jpg?im_w=720',
                        'https://a0.muscache.com/im/pictures/53efff39-8ad1-4a94-b678-a9f614eaed0a.jpg?im_w=720',
                        'https://a0.muscache.com/im/pictures/53efff39-8ad1-4a94-b678-a9f614eaed0a.jpg?im_w=720'
                    ],
                    rate : 5,
                    price : 5000,
                    water : '300',
                    electricity : 'metered',
                    capacity : 2,
                },
            ],
            price_dropdown : false,
            capacity_dropdown : false,
            room_type_dropdown : false,
            reserve_popup : false,
        }
    },
    methods:{
        reserveBtn(){
            this.reserve_popup = true;
        }
    }

}
</script>

<style lang="scss" scoped>

</style>