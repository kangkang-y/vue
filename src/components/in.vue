<template>
	<div class="in">
	<div class="top">
		<ul class="ul1">
			<li><img src="../assets/logo.png"/></li>
			<li>首页</li>
			<li>目的地</li>
			<li>机票</li>
			<li>酒店</li>
			<li><span class="sp"><img src="../assets/search.png"/></span><input type="text" placeholder="请输入您的目的地" /></li>
			<li>登录/注册</li>
		</ul>
	</div>
	<div class="bo">
		
	</div>
	<div class="bo1">
		<p class="p1">精彩视频</p>
		<div class="box">
			<div class="le" v-for="item in list ">
			<img :src=item.leimg />
		</div>
		<div class="ri" v-for="item in list ">
			<p class="p2"><span><img src="../assets/4.png" />&nbsp;</span>播放列表</p>
			<div class="oo">
				<div class="im" v-for="item in list ">
					<img :src=item.riimg />
				</div>
				<div class="ff">
					<p>{{item.title}}</p>
					<p>{{item.title1}}</p>
					
				</div>
			</div>
			<div class="oo">
				<div class="im" v-for="item in list ">
					<img :src=item.riimg />
				</div>
				<div class="ff">
					<p>{{item.title}}</p>
					<p>{{item.title1}}</p>
					
				</div>
			</div>
				<div class="oo">
				<div class="im" v-for="item in list ">
					<img :src=item.riimg />
				</div>
				<div class="ff">
					<p>{{item.title}}</p>
					<p>{{item.title1}}</p>
					
				</div>
			</div>
			
		</div>
		</div>
		
	</div>
	<div class="bo2">
		<p class="p1">最新游记</p>
		<div class="cc">
			<div class="tu" v-for="item in list ">
				<img :src=item.leimg />
				<h3>{{item.title12}}</h3>
				<p>{{item.title3}}</p>
				<p>{{item.title4}}</p>
			</div>
			<div class="tu" v-for="item in list ">
				<img :src=item.leimg />
				<h3>{{item.title12}}</h3>
				<p>{{item.title3}}</p>
				<p>{{item.title4}}</p>
			</div><div class="tu" v-for="item in list ">
				<img :src=item.leimg />
				<h3>{{item.title12}}</h3>
				<p>{{item.title3}}</p>
				<p>{{item.title4}}</p>
			</div><div class="tu" v-for="item in list ">
				<img :src=item.leimg />
				<h3>{{item.title12}}</h3>
				<p>{{item.title3}}</p>
				<p>{{item.title4}}</p>
			</div><div class="tu" v-for="item in list ">
				<img :src=item.leimg />
				<h3>{{item.title12}}</h3>
				<p>{{item.title3}}</p>
				<p>{{item.title4}}</p>
			</div><div class="tu" v-for="item in list ">
				<img :src=item.leimg />
				<h3>{{item.title12}}</h3>
				<p>{{item.title3}}</p>
				<p>{{item.title4}}</p>
			</div>
		</div>
		
	</div>
	
	
	
	</div>
</template>

<script>
		export default {
  data () {
    return {
    }
  }
}
</script>
<script type="text/javascript" src="../new_file.js"></script>
<style scoped="scoped">
@import url("../in.css");

</style>