 BACKGROUND
You are working for ModelOff Vehicle Services (MVC) who specialize in servicing highly specialized 
vehicles. MVC have 9 depots (referred to as Depot A to Depot I) which they use to service the vehicles. 
You are planning for the expected vehicles due next quarter and need to allocate the vehicle intake to the 
9 depots under the allocation methodology that MVC uses. 
MVC earns revenue of $2,000 per vehicle serviced. 
Profit is calculated as revenue less any transportation costs incurred less any penalty costs incurred. 
Where a vehicle is serviced at a depot other than the one where the customer drops it off, MVC must pay 
the transport costs associated with getting it to the depot it is serviced at, then back to the original depot 
for collection. Transport costs are $1.40 per vehicle per mile (part miles are charged pro rata).  
If MVC cannot service a vehicle, they must pay a $500 penalty per vehicle. They will pay this penalty in 
two situations: 
1) Where there is insufficient capacity within a hub to service a vehicle; and 
2) Where the revenue for a vehicle less the transport costs for that vehicle would be more expensive for 
MVC than not servicing the vehicle and paying the penalty. 
DEPOTS AND HUBS 
There are 9 depots. The distance between each depot pairing (one way, in miles) is shown in the table 
below: 

            Depot A  Depot B  Depot C  Depot D  Depot E  Depot F  Depot G  Depot H  Depot I
Depot A     -        -        -        -        -        -        -        -        -
Depot B     482.00   -        -        -        -        -        -        -        -
Depot C     417.00   381.49   -        -        -        -        -        -        -
Depot D     297.00   681.69   340.00   -        -        -        -        -        -
Depot E     576.00 1,096.43   790.23  362.22   -        -        -        -        -
Depot F     285.00   853.92   683.40   330.00   -        -        -        -        -
Depot G     613.00 1,150.65 1,095.05  759.71   577.00   341.00   -        -        -
Depot H     521.00   791.91   976.13  882.81   993.16   620.00   557.82   -        -
Depot I     529.43   477.25   819.70  908.42 1,133.92   804.87   913.33   319.66   -

 
This table is also in the Excel workbook provided. All distances in this table are unique (there are no 
duplicates). 
The total capacity of each depot is shown in the table below: 

Depot        Depot A  Depot B  Depot C  Depot D  Depot E  Depot F  Depot G  Depot H  Depot I
# Vehicles   2,700    400      100      400      100      400      600      700      900

The depots are organized into between 1 and 3 hubs under the different the scenarios, as set out below.

ALLOCATION METHODOLOGY 
For legal reasons, allocation must be assessed and performed for each hub in isolation (no cars from one 
hub may be serviced in any other hub). The methodology for allocating vehicles to depots for servicing 
within a hub is: 
1) Each vehicle is initially delivered to a certain depot and must be collected from that depot. If MVC 
chooses to transport that vehicle to another depot for servicing, MVC will bear a transportation cost for 
that vehicle as set out above. 
2) All vehicles are serviced at the depot they arrive, where capacity exists to do so. Where any depot has 
excess vehicles that cannot be serviced at that depot, vehicles are allocated as per step 3. 
3) Calculate the vehicle that has the shortest trip (and therefore cost) to any other depot with available 
capacity. Allocate that vehicle to that depot for servicing 
4) Repeat step 3 until either no excess vehicles remain or MVC would choose to instead pay the penalty 
per vehicle (as described above). 
 
Note that MVC’s allocation methodology may not lead to the optimum allocation between depots. You 
need to model MVC’s allocation methodology as it is set out above, you are not required to make any 
changes to this methodology. 
All analysis is conducted on whole vehicles only (no part vehicle calculations are performed). 
SCENARIOS 
There are 4 different scenarios you need to consider of your model. These scenarios are in the excel 
workbook provided and in the table below: 

                Depot A   Depot B   Depot C   Depot D   Depot E   Depot F   Depot G   Depot H   Depot I
Scenario 1 vehicles    2,438      544       121       553       103       300       501       579       1,138
Scenario 1a hubs       Hub 1      Hub 1     Hub 1     Hub 2     Hub 2     Hub 2     Hub 3     Hub 3     Hub 3
Scenario 1b hubs       Hub 1      Hub 1     Hub 1     Hub 1     Hub 2     Hub 2     Hub 2     Hub 2     Hub 2

Scenario 2 vehicles    2,099      519       107       333       88        280       567       898       1,087
Scenario 2a hubs       Hub 1      Hub 1     Hub 1     Hub 2     Hub 2     Hub 2     Hub 3     Hub 3     Hub 3
Scenario 2b hubs       Hub 1      Hub 1     Hub 1     Hub 1     Hub 1     Hub 1     Hub 1     Hub 1     Hub 1
 
For Questions 26-31, 33, select your answer from a multiple choice list. 
For Questions 32, 34 you are required to type in your answer.


