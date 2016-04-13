<template lang="ejs">
    <div id="app-footer">
        <div class="footer-wrap">
            <div class="footer-block contact">
                <div class="contact-way">
                    <h3>联系方式:</h3>
                    <ul>
                        <li><a href=""><i class="fa fa-github fa-fw fa-2x"></i></a></li>
                        <li><a href=""><i class="fa fa-qq fa-fw fa-2x"></i></a></li>
                        <li><a href=""><i class="fa fa-envelope fa-fw fa-2x"></i></a></li>
                        <li><a href=""><i class="fa fa-twitter fa-fw fa-2x"></i></a></li>
                    </ul>
                </div>
                <div class="contact-address">
                    <h3>位置:</h3>
                    <p>南京邮电大学(仙林校区)</p>
                    <p>教四-304/314</p>
                </div>
            </div>
            <div class="footer-block friend-link">
                <h3>友情链接:</h3>
            </div>
            <div class="footer-block qr-code">
                <h3>二维码:</h3>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                msg: 'this is footer component'
            }
        }
    }
</script>
<style lang="sass" scoped>
    $side-part-width: 300px;
    $footer-part-background: #000;
    $footer-part-height: 300px;

    #app-footer {
        width: 100%;
        min-width: 1000px;
        height: $footer-part-height;
        padding: 30px 20px;
        background-color: $footer-part-background;
        color: #aaa;
        box-sizing: border-box;

        .footer-wrap {
            width: 80%;
            height: 100%;
            margin: 0 auto;

            .footer-block {
                height: 100%;
                box-sizing: border-box;
                padding: 20px 20px;
                
                h3 {
                    color: #aaa;
                }
            }
            
            .contact {
                float: left;
                width: $side-part-width;

                .contact-way {

                    h3 {

                    }
                    ul {
                        overflow: hidden;
                        margin: 20px 0;

                        li {
                            float: left;
                            margin: 0 10px;

                            a {
                                i {
                                    color: #fff;
                                }
                            }
                        }
                    }
                }

                .contact-address {
                    p {
                        width: 100%;
                        margin: 20px 0;
                        text-indent: 2em;
                        font-size: 0.8em;
                    }
                }
            }

            .friend-link {
                float: right;
                width: $side-part-width;
            }

            .qr-code {
                margin: 0 $side-part-width - 2;
                border-right: 1px solid #333;
                border-left: 1px solid #333;
            }
        }


    }
</style>