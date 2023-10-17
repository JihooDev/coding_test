# 큰 수 출력하기

### 문제 설명

<p>A, B 두 사람이 가위바위보 게임을 합니다.<br />
총 N번의 게임을 하여 A가 이기면 A를 출력하고, B가 이기면 B를 출력합니다. 비길 경우에는 D를 출력합니다.<br/>
가위, 바위, 보의 정보는 1:가위, 2:바위, 3:보로 정하겠습니다.<br/>

예를 들어 N=5이면</p>
<table class="table">
        <thead><tr>
<th>회수</th>
<th>1</th>
<th>2</th>
<th>3</th>
<th>4</th>
<th>5</th>
</tr>
</thead>
<tbody>
<tr>
<td>A의 정보</td>
<td>2</td>
<td>3</td>
<td>3</td>
<td>1</td>
<td>3</td>
</tr>
<tr>
<td>B의 정보</td>
<td>1</td>
<td>1</td>
<td>2</td>
<td>2</td>
<td>3</td>
</tr>
<tr>
<td>승자</td>
<td>A</td>
<td>B</td>
<td>A</td>
<td>B</td>
<td>D</td>
</tr>
</tbody>
</table>
<h5>입력 설명</h5>

<ul>
<li>첫 번째 줄에 게임 횟수인 자연수 N(1<=N<=100)이 주어집니다.</li>
<li>두 번째 줄에는 A가 낸 가위, 바위, 보 정보가 N개 주어집니다.</li>
<li>세 번째 줄에는 B가 낸 가위, 바위, 보 정보가 N개 주어집니다.</li>
</ul>

<h5>출력 설명</h5>

<ul>
<li>각 줄에 각 회의 승자를 출력합니다. 비겼을 경우는 D를 출력합니다.</li>
</ul>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>n</th>
<th>aArr</th>
<th>bArr</th>
</tr>
</thead>
        <tbody><tr>
<td>5</td>
<td>[2,3,3,1,3]</td>
<td>[1,1,2,2,3]</td>
</tr>
</tbody>
</table>
<h5>출력</h5>
<ul>
<li>[A,B,A,B,D]</li>
</ul>