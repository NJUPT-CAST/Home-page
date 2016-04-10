<template lang="ejs">
    <div id="app-footer">
        <div class="footer-wrap">
            <div class="footer-block contact">
                <div class="contact-way">
                    <h3>联系方式:</h3>
                    <ul>
                        <li><i class="fa fa-github"></i></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div class="contact-address">
                    <h3>位置:</h3>
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
        background-color: $footer-part-background;
        color: #aaa;

        .footer-wrap {
            width: 80%;
            height: 100%;
            margin: 0 auto;

            .footer-block {
                height: 100%;
                padding: 30px 20px;
            }
            
            .contact {
                float: left;
                width: $side-part-width;
            }

            .friend-link {
                float: right;
                width: $side-part-width;
            }

            .qr-code {
                margin: 0 $side-part-width - 2;
            }
        }


    }
</style>